import React, { useState } from "react";
import {
  dimensionMeta,
  questions,
  specialQuestions,
  TYPE_LIBRARY,
  TYPE_IMAGES,
  NORMAL_TYPES,
  DIM_EXPLANATIONS,
  dimensionOrder,
  DRUNK_TRIGGER_QUESTION_ID,
  getPersonalityImage,
} from "./data/sbtiData";

const App = () => {
  const [screen, setScreen] = useState("intro");
  const [answers, setAnswers] = useState({});
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  const getVisibleQuestions = () => {
    let visible = [...shuffledQuestions];
    const gateIndex = visible.findIndex((q) => q.id === "drink_gate_q1");
    if (gateIndex !== -1 && answers["drink_gate_q1"] === 3) {
      visible.splice(gateIndex + 1, 0, specialQuestions[1]);
    }
    return visible;
  };

  const startTest = () => {
    setAnswers({});
    const shuffledRegular = shuffle(questions);
    const insertIndex = Math.floor(Math.random() * shuffledRegular.length) + 1;
    setShuffledQuestions([
      ...shuffledRegular.slice(0, insertIndex),
      specialQuestions[0],
      ...shuffledRegular.slice(insertIndex),
    ]);
    setScreen("test");
  };

  const handleAnswer = (id, value) => {
    setAnswers((prev) => {
      const newAns = { ...prev, [id]: Number(value) };
      if (id === "drink_gate_q1" && Number(value) !== 3) {
        delete newAns["drink_gate_q2"];
      }
      return newAns;
    });
  };

  const computeResult = () => {
    const rawScores = {};
    Object.keys(dimensionMeta).forEach((dim) => {
      rawScores[dim] = 0;
    });

    questions.forEach((q) => {
      if (answers[q.id]) rawScores[q.dim] += answers[q.id];
    });

    const levels = {};
    Object.entries(rawScores).forEach(([dim, score]) => {
      levels[dim] = score <= 3 ? "L" : score === 4 ? "M" : "H";
    });

    const userVector = dimensionOrder.map((dim) =>
      levels[dim] === "L" ? 1 : levels[dim] === "M" ? 2 : 3
    );

    const ranked = NORMAL_TYPES.map((type) => {
      const vector = type.pattern
        .replace(/-/g, "")
        .split("")
        .map((l) => (l === "L" ? 1 : l === "M" ? 2 : 3));
      let distance = 0,
        exact = 0;
      for (let i = 0; i < vector.length; i++) {
        const diff = Math.abs(userVector[i] - vector[i]);
        distance += diff;
        if (diff === 0) exact++;
      }
      const similarity = Math.max(0, Math.round((1 - distance / 30) * 100));
      return {
        ...type,
        ...TYPE_LIBRARY[type.code],
        distance,
        exact,
        similarity,
      };
    }).sort(
      (a, b) =>
        a.distance - b.distance ||
        b.exact - a.exact ||
        b.similarity - a.similarity
    );

    const bestNormal = ranked[0];
    const drunkTriggered = answers[DRUNK_TRIGGER_QUESTION_ID] === 2;

    let finalType = bestNormal;
    let modeKicker = "Your Primary Type";
    let badge = `Match ${bestNormal.similarity}% · ${bestNormal.exact}/15 exact`;
    let sub = "High dimension match — this is your core personality portrait.";
    let special = false;

    if (drunkTriggered) {
      finalType = TYPE_LIBRARY.DRUNK;
      modeKicker = "Hidden Personality Activated";
      badge = "100% Match • Alcohol Overwrite Complete";
      sub = "Ethanol affinity too strong — normal personality skipped.";
      special = true;
    } else if (bestNormal.similarity < 60) {
      finalType = TYPE_LIBRARY.HHHH;
      modeKicker = "System Forced Fallback";
      badge = `Standard library max match only ${bestNormal.similarity}%`;
      sub =
        "Your brain broke the entire personality database. Forced assignment to HHHH.";
      special = true;
    }

    return { rawScores, levels, finalType, modeKicker, badge, sub, special };
  };

  const visible = getVisibleQuestions();
  const done = visible.filter((q) => answers[q.id] !== undefined).length;
  const total = visible.length;
  const isComplete = done === total && total > 0;

  const hintText = isComplete
    ? "All questions completed. Ready to see your chaotic self."
    : "Full selection is required before submission. The world is chaotic enough, at least complete the questions.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 font-sans">
      <div className="max-w-[1080px] mx-auto px-4 py-8">
        {/* Intro Screen */}
        {screen === "intro" && (
          <div className="pt-20 text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-3xl border border-emerald-200 text-emerald-700 text-sm font-semibold mb-8">
              SBTI — ENGLISH EDITION
            </div>
            <h1 className="text-7xl font-bold tracking-tighter text-emerald-950 leading-none">
              Discover Your True
              <br />
              (Chaotic) Self
            </h1>
            <p className="mt-6 text-xl text-emerald-700 max-w-md mx-auto">
              MBTI is outdated. Now there’s SBTI.
            </p>
            <button
              onClick={startTest}
              className="mt-12 px-16 py-6 bg-emerald-700 hover:bg-emerald-800 text-white text-2xl rounded-3xl font-semibold flex items-center gap-4 mx-auto transition-all"
            >
              Start the Test →
            </button>
          </div>
        )}

        {/* Test Screen */}
        {screen === "test" && (
          <div className="max-w-[980px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="text-emerald-600 font-medium">
                Question {done} / {total}
              </div>
              <div className="flex-1 mx-6 h-3 bg-emerald-100 rounded-3xl overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-700 transition-all"
                  style={{ width: `${total ? (done / total) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div className="space-y-8">
              {visible.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-xl"
                >
                  <div className="flex justify-between text-xs text-emerald-600 mb-4">
                    <div>Question {idx + 1}</div>
                    <div className="font-medium">Dimension hidden</div>
                  </div>
                  <p className="text-lg leading-relaxed mb-8">{q.text}</p>
                  <div className="grid gap-4">
                    {q.options.map((opt, i) => {
                      const code = ["A", "B", "C", "D"][i] || i + 1;
                      return (
                        <label
                          key={i}
                          className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all ${
                            answers[q.id] === opt.value
                              ? "border-emerald-700 bg-emerald-50"
                              : "border-emerald-200 hover:border-emerald-400"
                          }`}
                        >
                          <input
                            type="radio"
                            checked={answers[q.id] === opt.value}
                            onChange={() => handleAnswer(q.id, opt.value)}
                            className="mt-1 accent-emerald-700"
                          />
                          <span className="font-bold text-emerald-700 w-6">
                            {code}
                          </span>
                          <span className="flex-1">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-emerald-600 mb-4">{hintText}</p>
              <button
                onClick={() => setScreen("result")}
                disabled={!isComplete}
                className="w-full py-6 bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-300 text-white text-2xl rounded-3xl font-semibold transition-all"
              >
                See My Personality →
              </button>
            </div>
          </div>
        )}

        {/* Result Screen */}
        {screen === "result" &&
          (() => {
            const result = computeResult();
            const type = result.finalType;
            // Get the dynamic image URL
            const imageUrl = getPersonalityImage(type.code);
            return (
              <div className="space-y-8">
                
                {/* 1. Combined Box (Image on Left, Description on Right) */}
                <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col lg:flex-row gap-10">
                  {/* Left Part: Poster Image */}
                  <div className="lg:w-2/5 flex flex-col justify-between shrink-0">
                    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white rounded-3xl overflow-hidden py-8">
                      <img
                        src={imageUrl}
                        alt={type.code}
                        className="max-h-[380px] object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.innerHTML = `<div class="text-8xl font-black text-emerald-200">${type.code}</div>`;
                        }}
                      />
                    </div>
                    <p className="text-center mt-6 text-emerald-700 text-xl font-medium">
                      "{type.intro}"
                    </p>
                  </div>

                  {/* Right Part: Profile Text & Description */}
                  <div className="lg:w-3/5 flex flex-col justify-center space-y-6">
                    <div>
                      <span className="inline-block px-5 py-2 bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest rounded-3xl mb-3">
                        {result.modeKicker}
                      </span>
                      <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-emerald-950">
                        {type.code} — {type.cn}
                      </h1>
                      <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-3xl px-6 py-3 text-emerald-700 font-semibold">
                        {result.badge}
                      </div>
                    </div>

                    <p className="text-xl text-emerald-800 font-medium leading-relaxed">
                      {result.sub}
                    </p>
                    <p className="text-emerald-800 text-[16px] leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                </div>

                {/* 2. Dimensions Grid Box (Below them) */}
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="font-semibold text-xl text-emerald-950 mb-6">
                    15-Dimension Breakdown
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {dimensionOrder.map((dim) => {
                      const level = result.levels[dim];
                      return (
                        <div
                          key={dim}
                          className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100"
                        >
                          <div className="flex justify-between text-sm font-medium">
                            <span className="text-emerald-900">{dimensionMeta[dim].name}</span>
                            <span className="font-bold text-emerald-700">
                              {level} • {result.rawScores[dim]}/6
                            </span>
                          </div>
                          <p className="text-xs text-emerald-600 mt-4 leading-relaxed">
                            {DIM_EXPLANATIONS[dim][level]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => window.location.reload()}
                    className="flex-1 py-5 border-2 border-emerald-200 text-emerald-800 hover:border-emerald-400 hover:bg-emerald-50 rounded-3xl font-semibold text-lg transition-all"
                  >
                    Take Test Again
                  </button>
                  <button
                    onClick={() => setScreen("intro")}
                    className="flex-1 py-5 bg-emerald-700 text-white hover:bg-emerald-800 rounded-3xl font-semibold text-lg transition-all"
                  >
                    Back to Home
                  </button>
                </div>

              </div>
            );
          })()}
      </div>
    </div>
  );
};

export default App;