// src/data/sbtiData.js
export const dimensionMeta = {
  S1: { name: "S1 Self-Esteem & Confidence", model: "Self Model" },
  S2: { name: "S2 Self-Clarity", model: "Self Model" },
  S3: { name: "S3 Core Values", model: "Self Model" },
  E1: { name: "E1 Attachment Security", model: "Emotional Model" },
  E2: { name: "E2 Emotional Investment", model: "Emotional Model" },
  E3: { name: "E3 Boundaries & Dependency", model: "Emotional Model" },
  A1: { name: "A1 Worldview Tendency", model: "Attitude Model" },
  A2: { name: "A2 Rules & Flexibility", model: "Attitude Model" },
  A3: { name: "A3 Sense of Life Meaning", model: "Attitude Model" },
  Ac1: { name: "Ac1 Motivation Orientation", model: "Action Drive Model" },
  Ac2: { name: "Ac2 Decision Style", model: "Action Drive Model" },
  Ac3: { name: "Ac3 Execution Mode", model: "Action Drive Model" },
  So1: { name: "So1 Social Initiative", model: "Social Model" },
  So2: { name: "So2 Interpersonal Boundaries", model: "Social Model" },
  So3: { name: "So3 Expression & Authenticity", model: "Social Model" },
};

export const questions = [
  {
    id: "q1",
    dim: "S1",
    text: "I'm not just a loser — I'm the full package: Joker, salty fish, never had a single relationship. Scared, insecure, my youth was nothing but endless daydreams of walking hand-in-hand with a girl, going on dates, having fun. Reality? I blew through my parents' money, went to a trash school, drifted through life with zero goals, zero direction, zero skills. Every time I see you roasting losers online I want to cry. I'm the rat in the sewer, peeking through the grate at all the beautiful things above. Please give us clowns some breathing room. I really don't want to keep soaking my pillow with tears every night.",
    options: [
      { label: "I cried reading this...", value: 1 },
      { label: "What the hell is this...", value: 2 },
      { label: "This isn't me!", value: 3 },
    ],
  },
  {
    id: "q2",
    dim: "S1",
    text: "I am not good enough. Everyone around me is better than me.",
    options: [
      { label: "True", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "No", value: 3 },
    ],
  },
  {
    id: "q3",
    dim: "S2",
    text: "I have a very clear understanding of who I truly am.",
    options: [
      { label: "Disagree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Agree", value: 3 },
    ],
  },
  {
    id: "q4",
    dim: "S2",
    text: "There are things I genuinely pursue deep inside.",
    options: [
      { label: "Disagree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Agree", value: 3 },
    ],
  },
  {
    id: "q5",
    dim: "S3",
    text: "I must keep climbing and becoming stronger.",
    options: [
      { label: "Disagree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Agree", value: 3 },
    ],
  },
  {
    id: "q6",
    dim: "S3",
    text: "Other people's opinions don't matter to me at all.",
    options: [
      { label: "Disagree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Agree", value: 3 },
    ],
  },
  {
    id: "q7",
    dim: "E1",
    text: "If your partner hasn’t replied for over 5 hours and says they had diarrhea, what do you think?",
    options: [
      {
        label: "Diarrhea can’t last 5 hours. They must be hiding something.",
        value: 1,
      },
      { label: "I swing between trust and doubt.", value: 2 },
      { label: "Maybe they really aren’t feeling well today.", value: 3 },
    ],
  },
  {
    id: "q8",
    dim: "E1",
    text: "I often worry about being abandoned in relationships.",
    options: [
      { label: "Yes", value: 1 },
      { label: "Occasionally", value: 2 },
      { label: "No", value: 3 },
    ],
  },
  {
    id: "q9",
    dim: "E2",
    text: "I swear I take every relationship seriously!",
    options: [
      { label: "Not really", value: 1 },
      { label: "Maybe?", value: 2 },
      { label: "Yes! (proud face)", value: 3 },
    ],
  },
  {
    id: "q10",
    dim: "E2",
    text: "Your partner is incredibly perfect in every way. How do you feel?",
    options: [
      { label: "Even if they’re perfect I won’t get too attached.", value: 1 },
      { label: "Somewhere between A and C.", value: 2 },
      {
        label: "I would cherish them deeply — maybe become a love-brain.",
        value: 3,
      },
    ],
  },
  {
    id: "q11",
    dim: "E3",
    text: "After getting together, your partner becomes very clingy. Your reaction?",
    options: [
      { label: "That’s awesome.", value: 1 },
      { label: "Whatever, it’s fine.", value: 2 },
      { label: "I prefer keeping my own space.", value: 3 },
    ],
  },
  {
    id: "q12",
    dim: "E3",
    text: "I value personal space highly in any relationship.",
    options: [
      { label: "I prefer dependency and being depended on.", value: 1 },
      { label: "It depends.", value: 2 },
      { label: "Yes! (firmly)", value: 3 },
    ],
  },
  {
    id: "q13",
    dim: "A1",
    text: "Most people are kind.",
    options: [
      {
        label: "Actually, evil people outnumber hemorrhoids in the world.",
        value: 1,
      },
      { label: "Maybe.", value: 2 },
      { label: "Yes, I choose to believe good people are more.", value: 3 },
    ],
  },
  {
    id: "q14",
    dim: "A1",
    text: "A super cute little girl walks up to you on the street and offers you a lollipop. What do you think?",
    options: [
      { label: "Aww she’s so sweet and cute!", value: 3 },
      { label: "Confused, scratching head.", value: 2 },
      { label: "This might be a new scam. Better walk away.", value: 1 },
    ],
  },
  {
    id: "q15",
    dim: "A2",
    text: "Exam week. School requires evening study hall (absence = penalty). Tonight you have a date with your crush to play PUBG. What do you do?",
    options: [
      { label: "Skip it! Just once.", value: 1 },
      { label: "Just ask for leave.", value: 2 },
      { label: "Exams are more important.", value: 3 },
    ],
  },
  {
    id: "q16",
    dim: "A2",
    text: "I like breaking rules and hate being restricted.",
    options: [
      { label: "Agree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Disagree", value: 3 },
    ],
  },
  {
    id: "q17",
    dim: "A3",
    text: "I usually have clear goals when I do things.",
    options: [
      { label: "Disagree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Agree", value: 3 },
    ],
  },
  {
    id: "q18",
    dim: "A3",
    text: "One day I realized life has no damn meaning. We’re just animals driven by hormones.",
    options: [
      { label: "Exactly.", value: 1 },
      { label: "Maybe, maybe not.", value: 2 },
      { label: "That’s nonsense.", value: 3 },
    ],
  },
  {
    id: "q19",
    dim: "Ac1",
    text: "I do things mainly to achieve results and progress, not just to avoid trouble.",
    options: [
      { label: "Disagree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Agree", value: 3 },
    ],
  },
  {
    id: "q20",
    dim: "Ac1",
    text: "You’ve been constipated on the toilet for 30 minutes. Which are you more like?",
    options: [
      { label: "Sit another 30 minutes and see.", value: 1 },
      { label: "Slap my butt: “Come on, poop!”", value: 2 },
      { label: "Use an enema and get it over with.", value: 3 },
    ],
  },
  {
    id: "q21",
    dim: "Ac2",
    text: "I make decisions quickly and hate hesitation.",
    options: [
      { label: "Disagree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Agree", value: 3 },
    ],
  },
  {
    id: "q22",
    dim: "Ac2",
    text: "This question has no text. Blind choice.",
    options: [
      { label: "After thinking, maybe A?", value: 1 },
      { label: "Hmm, maybe B?", value: 2 },
      { label: "Just pick C?", value: 3 },
    ],
  },
  {
    id: "q23",
    dim: "Ac3",
    text: "When people say you have strong execution, which feels more true?",
    options: [
      { label: "Only when I’m forced at the last minute.", value: 1 },
      { label: "Sometimes.", value: 2 },
      { label: "Yes, things should be pushed forward.", value: 3 },
    ],
  },
  {
    id: "q24",
    dim: "Ac3",
    text: "I usually make plans, ____",
    options: [
      { label: "but plans always change.", value: 1 },
      { label: "sometimes I finish them, sometimes not.", value: 2 },
      { label: "and I hate when they get disrupted.", value: 3 },
    ],
  },
  {
    id: "q25",
    dim: "So1",
    text: "You made online friends playing Identity V and they invite you to meet offline. Your thought?",
    options: [
      {
        label: "Online chatting is fine, but meeting feels awkward.",
        value: 1,
      },
      { label: "Meeting net-friends is okay, I’ll just chat a bit.", value: 2 },
      {
        label: "I’ll dress up and chat enthusiastically — who knows?",
        value: 3,
      },
    ],
  },
  {
    id: "q26",
    dim: "So1",
    text: "Your friend brings their friend to hang out. You are most likely to:",
    options: [
      { label: "Feel a bit distant from the new person.", value: 1 },
      { label: "See how it goes.", value: 2 },
      { label: "Treat them like my friend too and chat warmly.", value: 3 },
    ],
  },
  {
    id: "q27",
    dim: "So2",
    text: "When I interact with people I keep an electronic fence — getting too close triggers an alarm.",
    options: [
      { label: "Agree", value: 3 },
      { label: "Neutral", value: 2 },
      { label: "Disagree", value: 1 },
    ],
  },
  {
    id: "q28",
    dim: "So2",
    text: "I crave deep closeness with people I trust.",
    options: [
      { label: "Agree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Disagree", value: 3 },
    ],
  },
  {
    id: "q29",
    dim: "So3",
    text: "Sometimes you have a negative opinion but don’t say it. The main reason is usually:",
    options: [
      { label: "This rarely happens.", value: 1 },
      { label: "Because of face or the relationship.", value: 2 },
      { label: "I don’t want others to see my dark side.", value: 3 },
    ],
  },
  {
    id: "q30",
    dim: "So3",
    text: "I show different versions of myself to different people.",
    options: [
      { label: "Disagree", value: 1 },
      { label: "Neutral", value: 2 },
      { label: "Agree", value: 3 },
    ],
  },
];

export const specialQuestions = [
  {
    id: "drink_gate_q1",
    special: true,
    kind: "drink_gate",
    text: "What are your usual hobbies?",
    options: [
      { label: "Eat, drink, poop, sleep", value: 1 },
      { label: "Art hobbies", value: 2 },
      { label: "Drinking", value: 3 },
      { label: "Fitness", value: 4 },
    ],
  },
  {
    id: "drink_gate_q2",
    special: true,
    kind: "drink_trigger",
    text: "What is your attitude toward drinking?",
    options: [
      { label: "Just a casual sip for fun, I can’t drink much.", value: 1 },
      {
        label:
          "I pour white liquor into my thermos and drink it like water. Alcohol convinces me.",
        value: 2,
      },
    ],
  },
];

export const TYPE_LIBRARY = {
  CTRL: {
    code: "CTRL",
    cn: "The Controller",
    intro: "How does it feel to be completely read by me?",
    desc: "Congratulations, you've tested into the rarest personality in the nation; you are a natural rebel against the universe's law of entropy! 99.99% of the so-called 'successful people' in the world are just poor imitations of you. The CTRL personality is a walking, talking task manager. The 'rules' in the eyes of ordinary people are just your factory default settings; what mortals call a 'plan' is nothing more than a whimsical doodle to you. What does it mean to have a CTRL friend? It means your life's navigation system will become infinitely more precise and efficient. Because CTRL knows exactly how to handle everything. One second before the train of your life derails, CTRL will hit a hardcore 'Ctrl+S' to save your progress, then forcibly drag you back on track with a set of logic you simply cannot refuse. They are the ultimate backup drive of your chaotic life, the last glowing reset button before the universe collapses.",
  },
  "ATM-er": {
    code: "ATM-er",
    cn: "The ATM",
    intro: "Did you think I was made of money?",
    desc: "Congratulations, you actually tested into the rarest personality in the world. You might become an unsolved mystery in the financial world—yes, an ATM-er doesn't necessarily 'give away money,' but they might forever be 'paying.' Paying with time, paying with energy, paying with patience, paying with what should have been a peaceful night. Like an old but sturdy ATM machine, what gets inserted is other people's anxiety and trouble, and what spits out is the reassuring guarantee of 'It's okay, I've got this.' Your life is a grand, unapplauded solo paying-the-bill show. You endure a waterfall of demands with rock-solid reliability, only letting out a sigh in the dead of night while staring at the bill—likely a mental one: 'Oh, this damn, overflowing sense of responsibility of mine.'",
  },
  "Dior-s": {
    code: "Dior-s",
    cn: "The Realist Slacker",
    intro: "Just wait for my underdog glow-up.",
    desc: "Congratulations! You are not a loser; you are the long-lost spiritual heir of the Cynic philosopher Diogenes, because the full name of this type is Diogenes' Original Realist - sage (Dior-s). The Dior-s personality holds the most absolute contempt for contemporary consumerist traps and toxic hustle culture. They aren't 'lacking ambition'; they've simply seen through the fact that the end of all 'hustling' is just a fancier prison cell. The Dior-s possesses great wisdom. While others are chasing trends and getting battered by the massive waves of the times, the Dior-s has long been sunbathing in their own mental wooden barrel, reaching the supreme state of 'man-barrel unity.' They don't believe in empty words, but in the laws of physics and biological instincts tested by billions of years of practice: 1. Lying down is more comfortable than standing up; 2. When it's time to eat, you gotta eat.",
  },
  BOSS: {
    code: "BOSS",
    cn: "The Boss",
    intro: "Give me the steering wheel, I'll drive.",
    desc: "The BOSS is someone who always holds the steering wheel. Even if the gas tank is flashing red and the GPS is speaking absolute nonsense, you'll just say deadpan, 'I'll drive.' And then actually drive the car to the destination. This personality possesses its own independent law of physics: the law of eternal upward mobility. The way a BOSS views the world is like a max-level player looking at the tutorial. Efficiency is their religion, and order is the air they breathe. They don't just 'have a leadership aura'; they are human aura generators. Within a fifteen-foot radius, the air automatically becomes serious and productive. What they consider a 'personal breakthrough' is roughly what a normal person considers 'self-torture.' Today, master a new language; tomorrow, get another professional certification; the day after, plan the colonization of Mars. You say this is too try-hard, and they'll look at you like you're a weakling: 'It's not that I'm too hardcore, it's that you're too soft.'",
  },
  "THAN-K": {
    code: "THAN-K",
    cn: "The Thanker",
    intro: "I thank the heavens! I thank the earth!",
    desc: "Congratulations, you tested into the absolute rarest personality in the nation. You should thank me! Thank the fact that your life is nourished in this very moment! What if you hit a traffic jam on the way to work? You should say: 'I am grateful for this traffic jam, as it gives me more time to listen to this beautiful song and admire every face distorted by anxiety outside the window, making me cherish my inner peace even more.' Yes, THAN-K possesses a gentle-as-jade disposition and a boundless capacity for tolerance. In their eyes, the world has no absolute villains, only 'friends who haven't yet been illuminated by the light of gratitude.' Having a THAN-K friend is like having an inexhaustible positive energy broadcast tower next to you. They could even help you find a Van Gogh-style 'Starry Night' in a patch of mold in the corner of the room.",
  },
  "OH-NO": {
    code: "OH-NO",
    cn: "The Oh-Noer",
    intro: "Oh no! How did I get this personality?!",
    desc: "'Oh no!' is not a scream of terror, but a top-tier form of wisdom. When an ordinary person sees a cup on the edge of a table, the Oh-Noer sees a disaster epic unfolding: 'water stain -> short circuit -> fire -> building evacuation -> economic ruin -> butterfly effect -> the end of the world.' So, accompanied by an 'Oh, no!' from the depths of their soul, they will move the cup to the dead center of the table with lightning speed, and slide an absorbent coaster underneath for good measure. The Oh-Noer has an almost paranoid respect for 'boundaries': yours is yours, and mine is mine. All accidents and risks have already been smothered in the cradle by their chorus of 'Oh, no!'. They are the guardian deities of order, the last batch of tightly-wound, decent folks in a chaotic world.",
  },
  GOGO: {
    code: "GOGO",
    cn: "The Go-Getter",
    intro: "Go, go, go~ We're off!",
    desc: "Research shows that the brain structure of the GOGO personality is fundamentally different from that of ordinary people. A GOGO lives in an extreme 'what you see is what you get' world, and their life motto is outrageously simple: as long as I close my eyes, it's dark; as long as I spend all my money, I have no money; as long as I step on the crosswalk, I am now a pedestrian. A perfect closed loop of logic that is impossible to refute. While others are still debating 'which came first, the chicken or the egg,' the GOGO has already made both into an 'Ultimate Mystery of the Chicken and the Egg Rice Bowl.' They aren't 'solving problems'; they are 'clearing to-do lists.' To them, there are only two states in the world: finished, and about to be finished by me.",
  },
  SEXY: {
    code: "SEXY",
    cn: "The Stunner",
    intro: "You are a natural-born stunner!",
    desc: "When you walk into a room, the lighting system automatically recognizes you as a natural stunner and consciously dims the brightness to avoid wasting energy. When you smile, you become a smiling stunner, and the ambient humidity drops significantly because all the water vapor condenses into heart-eyes in everyone around you. No matter who they are, people easily develop off-the-charts attention toward your presence. Legend has it that if enough SEXY personalities gather at a party, the combined charismatic energy released is enough to temporarily warp the fabric of spacetime, giving attendees the blissful illusion that 'time has slowed down.' They don't need to try hard to express themselves; often, their mere existence is already like an overly glamorous epic poem.",
  },
  "LOVE-R": {
    code: "LOVE-R",
    cn: "The Romantic",
    intro: "Too much love, and reality feels a bit barren.",
    desc: "The LOVE-R personality is like a rare species surviving from the ancient mythological era; the probability of your existence is lower than the probability of fishing the author's arm out of a toilet. You are practically the last, and most out-of-place, bard of this era of concrete jungles. That's because your emotional processor isn't binary; it's rainbow-coded. A falling leaf, in the eyes of a normal person, is just 'fall is here'; in the eyes of a LOVE-R, it is a thirteen-act tragicomedy about reincarnation, sacrifice, and unspoken love. Your inner world is like a theme park that never closes, and you spend your whole life searching for that one soulmate who can read the park map and is willing to ride the carousel with you until the end of the universe.",
  },
  MUM: {
    code: "MUM",
    cn: "The Mom",
    intro: "Maybe... can I call you Mom...?",
    desc: "Congratulations, you tested into the rarest Mom personality in the country. Yes, before chaos was ordered, before time even had a name, before the very first star let out its first burp, there was Mom. The foundational color of the Mom personality is gentleness. You excel at perceiving emotions, possess super-strong empathy, and know exactly when to stop and when to tell yourself 'let it go.' A Mom is like a doctor, healing the unhappiness of others. The only tragedy is, when a Mom sheds tears, the dose of medicine they give themselves is always a size smaller than what they give others. MUM's gentleness toward themselves is always heavily discounted.",
  },
  FAKE: {
    code: "FAKE",
    cn: "The Shapeshifter",
    intro: "There are no humans left anymore.",
    desc: "Emergency report from the SCP Foundation: Item No. SCP-US-████ 'The Shapeshifter.' In social situations, the FAKE is a flawless chameleon, because they switch personality masks faster than you can switch keyboard layouts on your phone. One second, it's the heart-to-heart best bro mode; the next second, the boss walks in, and they instantly switch to the steady, reliable good employee mode—even the gloss and curl of their hair seem to micro-adjust. You thought you made a true friend who really gets you? Wake up. You just got lucky enough to encounter a highly performant, master-of-disguise android. In the dead of night, the FAKE peels off the masks one by one, only to finally realize it's completely empty underneath—those very masks are what constitute their true self.",
  },
  FKYEAH: {
    code: "FKYEAH",
    cn: "The Whatever-er",
    intro: "When I say whatever, I actually mean whatever.",
    desc: "Let's face the raw essence of this phrase: OKAF (Okay As Fuck). This is no longer just a personality; it's a ruling philosophy. While mortals face the century's great dilemma of 'rice or noodles for lunch' with their brains furiously burning calories, the OJBK personality will let out a casual, feather-light 'whatever works' with the detached calm of an emperor reviewing royal decrees. This isn't a lack of opinion; this is them telling you: 'The choices of you mortals are but ants to His Majesty.' Why not argue? Because debating the future of the universe with a paramecium is pointless. Why not take things seriously? Because an emperor doesn't care whether the dust at his feet blows to the left or the right.",
  },
  MALO: {
    code: "MALO",
    cn: "The Monkey",
    intro: "Life is an instance dungeon, and I'm just a little monkey.",
    desc: "Friend, you don't 'retain your childlike innocence'; you simply never evolved. Your soul is still stuck in that happy era of swinging from trees and getting stars in your eyes the second you see a banana. When human ancestors decided to come down from the trees, learn to walk upright, and put on suits and ties, the ancestors of the MALO personality were watching from the big tree next door, scratched their butts, and let out a disdainful 'eek.' They saw through it all: so-called 'civilization' is nothing but a supremely boring, unfun pay-to-win game. Rules can occasionally be broken, ceilings are for hanging upside down, and conference rooms are for doing backflips. MALO itself is a bizarre, whimsical idea that fell out of a giant, unzipped brain.",
  },
  "JOKE-R": {
    code: "JOKE-R",
    cn: "The Joker",
    intro: "Turns out we were all the clowns.",
    desc: "Please note, the JOKE-R personality isn't so much a 'person' as it is a clown wearing jokes as clothes. You peel back one layer, it's a joke; peel back another, it's a meme; you keep peeling layer by layer until the very end, and you realize the deepest core is... empty, leaving only a faint echo saying: 'Ha, didn't see that coming, did you?' JOKE-R is the hype man of any social gathering and the sole designated DPS for humor. As long as they're around, the room will never go cold. Everyone is laughing until their sides hurt, and the one laughing the loudest is usually the JOKE-R themselves—using their loudest laughter to cover up the sound of a breaking heart.",
  },
  "WTF!": {
    code: "WTF!",
    cn: "The WTF-er",
    intro: "WTF, how did I get this personality?",
    desc: "We have discovered a magical creature—the WOC! person. They possess two completely independent operating systems: one is the 'Frontend System,' responsible for emitting a series of dramatic expletives like 'Holy shit,' 'Badass,' and 'Huh?!'; the other is the 'Backend System,' responsible for calmly analyzing: 'Hmm, exactly as I expected.' WOC! people only say 'WTF' and never stick their noses where they don't belong, because they know deeply that reasoning with idiots is like trying to plaster mud on a wall—not only is it a waste of stamina, but you also end up with shit all over your hands. So they choose to hold onto a giant blade of wisdom grass, and use a deeply affectionate 'WTF!' to pay their highest respects to this crazy world.",
  },
  "THIN-K": {
    code: "THIN-K",
    cn: "The Thinker",
    intro: "Deep thought in progress: 100s.",
    desc: "Research shows that the brain structure of the THIN-K personality is fundamentally different from that of ordinary people. Just as the name suggests, your brain is in a prolonged state of thinking. You are exceptionally good at interrogating information, focusing on arguments, evidence, logical reasoning, potential biases, and even requiring a full 'three-generation ideological background check on the author.' In this era of information explosion, you absolutely refuse to blindly follow the herd. You weigh the pros and cons in relationships and fiercely defend your personal space. When others see you staring blankly while alone? Fools, that's not zoning out; that's your brain categorizing, archiving, and destroying all the information you received today.",
  },
  SHIT: {
    code: "SHIT",
    cn: "The Cynic",
    intro: "This world is just a giant piece of shit.",
    desc: "Congratulations, the SHIT personality is the only known ultra-rare personality in the universe. Saying 'bullshit' isn't complaining; it's engaging in a mystical ritual. The SHIT's behavior pattern is an earth-shattering paradox drama. Mouth: 'This project is total shit.' Hands: Silently open Excel and start building function models and Gantt charts. Mouth: 'These coworkers are all shit.' Hands: After a coworker screws up, they stay up all night, annoyed as hell, sorting out the entire mess perfectly. Mouth: 'This world is a piece of shit, just destroy it already.' Hands: Wake up promptly at 7:00 AM the next morning, squeeze onto a shit subway, to go to that shit job. Don't be afraid, that's not the alarm for the end of the world; that's the bugle call signaling that they are about to start saving the world.",
  },
  ZZZZ: {
    code: "ZZZZ",
    cn: "The Possum",
    intro: "I'm not dead, I'm just asleep.",
    desc: "Congratulations, you tested into the rarest playing-dead personality in the country. You can turn a blind eye to 99+ unread messages in the group chat, but when someone issues the final ultimatum, '@everyone 30 minutes left until the deadline,' you might slowly type out a 'Received,' like you just woke up from a millennium-old tomb, and then hand in a passing-grade paper within 29 minutes. Yes, it's only when the 'deadline'—the absolute, supreme command—appears that you truly explode into action; if you don't speak, you keep quiet, but when you do, you shock everyone. You have proven a fundamental truth to the universe: sometimes, if you do absolutely nothing, you won't do anything wrong.",
  },
  POOR: {
    code: "POOR",
    cn: "The Broke Hustler",
    intro: "I'm broke, but I'm hyper-focused.",
    desc: "Congratulations, you tested into [POOR - The Broke Hustler]. This 'poor' isn't a death sentence for your bank account balance; it's more like a reallocation of resources after a complete detox from desires. While others scatter their energy like QR codes flying in the wind, you compress your energy into a laser beam—wherever you point it, it starts smoking. The POOR's world is very simple: anything unimportant gets aggressively noise-canceled, and whatever is important gets hammered down to the very end. Bustle, socializing, vanity, trying to prove your existence everywhere? Sorry, no time. It's not that you lack resources; it's that you poured all your resources into one single hole, so it looks like poverty on the surface, but it's actually a gold mine. Once you decide something is worth digging into, all the noise outside is just background static.",
  },
  MONK: {
    code: "MONK",
    cn: "The Monk",
    intro: "I have none of those worldly desires.",
    desc: "When others are in the club trying to decipher the entanglements of love and hate, the MONK personality chooses to stay home and comprehend the Great Way. The MONK has already seen through the vanity of the mortal world and doesn't want idle people interrupting their peaceful cultivation or ruining their zen. A MONK's personal space is their magical barrier, their Mount Meru, their Absolute Terror Field—sacred and inviolable. Anyone who steps foot inside will feel a suffocating pressure from the depths of their soul. MONKs are never clingy or needy, because in their worldview, all things have their own independent orbits. Planets maintain billions of miles of distance between them to form a harmonious universe; why can't people do the same?",
  },
  DBFK: {
    code: "DBFK",
    cn: "The Dumbass",
    intro: "Seriously? Am I really a dumbass?",
    desc: "Congratulations! You are not even in the human category! You tested into the once-in-a-million-years [IMSB] personality. Inside the brain of an IMSB personality live two ultimate warriors locked in a fight to the death. One screams: 'Fuck it, I'm going in!' The other yells: 'I'm a total fucking dumbass!' When an IMSB faces someone they have a crush on, the former says: 'Charge! Go ask for their number! Ask them out to dinner! Say your love out loud!' The latter immediately follows up with: 'Why would they ever look twice at you? Going over there is just humiliating yourself!' The final result: staring at the person's back until they disappear, then pulling out a phone to search 'how to overcome social anxiety.' IMSB isn't actually stupid; it's just that your inner monologue is probably longer than all the Marvel Cinematic Universe movies combined.",
  },
  SOLO: {
    code: "SOLO",
    cn: "The Loner",
    intro: "I'm crying, how could I be a loner?",
    desc: "Congratulations, you tested into the rarest [SOLO - The Loner] personality in the nation. Don't rush to cry; the king's coronation ceremony is usually a one-man show. Loners have a relatively low sense of self-worth, which is why they sometimes actively distance themselves from others. Loners have built a Great Wall named 'Don't Fucking Touch Me' around the perimeter of their souls. Every single brick is a wound from the past. A loner is like a hedgehog that hides all its soft spots and then points its sharpest quills at the world. That body full of spikes isn't an attack; it's a bunch of unspoken phrases like 'Don't come closer, I'm afraid you'll get hurt too' and 'Please, don't leave me.'",
  },
  FUCK: {
    code: "FUCK",
    cn: "The Wild Weed",
    intro: "Fuck! What kind of personality is this?",
    desc: "Congratulations! You are not even in the human category! You tested into the once-in-a-million-years [FUCK] personality. In the civilized human city, a humanoid wild weed has emerged that cannot be killed by any herbicide, possessing super vitality—that is the Wild Weed personality. Its scientific name is FUCK. In the FUCK worldview, worldly rules are absolutely meaningless, and a FUCK's emotional switch is a physical toggle: FUCK YEAH and FUCK OFF. FUCK doesn't just pursue momentary pleasure; they are also chasing a raw vitality that violently crashes around inside their body. When everyone else has been domesticated into docile poultry, FUCK is the very last wolf howl echoing across the wilderness.",
  },
  DEAD: {
    code: "DEAD",
    cn: "The Dead One",
    intro: "Am I... still alive?",
    desc: "Congratulations, you tested into the rarest personality in the nation. It's just that the name 'The Dead One' is a bit too morbid, so you can also call it: Don't Expect Any Drives. The Dead One has already seen through all those meaningless philosophical thoughts, and thus appears to have 'lost' interest in everything. The way Dead Ones look at the world is like a top-tier gamer who has cleared all the main quests, side quests, and hidden achievements, deleted their save file, and restarted 999 times, only to finally realize: this game isn't actually fun at all. The Dead One is the ultimate sage who has transcended desires and goals. Their very existence is the most silent and thorough protest against this noisy world.",
  },
  TRASH: {
    code: "TRASH",
    cn: "The Trash",
    intro: "Am I really... a piece of trash?",
    desc: "Congratulations, you didn't test into a normal personality; you are an extremely rare species making up only 0.0001% of the world's population—[The Trash]. The self-esteem of 'The Trash' is usually a bit fragile, lacking a sense of security, and occasionally lacking their own opinions. Because of this, this personality can accurately sense the strongest WiFi signal around them—meaning the most reliable person in their heart. Walking into the life of an [IMFW] personality is like walking into a premium orchid greenhouse: it requires precise temperature and humidity control, as well as scheduled daily verbal photosynthesis consisting of 'I love yous.' Give 'The Trash' a piece of candy, and they will give you back a sparkling, completely trusting gaze. You might not actually be trash; you're just too defenseless and too easily invested.",
  },
  HHHH: {
    code: "HHHH",
    cn: "The Giggler",
    intro: "Hahahahahaha.",
    desc: "Congratulations! Because your thought circuits are so bizarre, the standard personality database has completely crashed. Only when the match rate for your primary personality is below 60% does the system forcefully assign you this one—[HHHH - The Giggler]. What are the traits of this personality? HAHAHAHAHAHAHAHAHAHAHA! I'm sorry, that is the entirety of your traits. You can check the 15 dimensions for an unprofessional evaluation, I'm truly sorry! The author didn't think things all the way through when setting up the personalities, which is why this situation occurred. Hahahahaha... laughing so hard I started crying. How can someone's brain wiring be this weird?",
  },
  DRUNK: {
    code: "DRUNK",
    cn: "The Drunkard",
    intro: "Hard liquor burns the throat, but I gotta get drunk.",
    desc: "Why are you walking with a stumble? Why are your emotions always running so high? Why are you seeing double? Because what flows in your veins isn't blood, it's delicious Jack Daniel's! It's Maker's Mark! It's Fireball! It's Kentucky Bourbon! Oh, delicious liquor, every drop is burning, boiling. Have you gotten used to pouring vodka into your Yeti tumbler and chugging it like tap water? What a magnificent beverage! It makes you the life of the party at the dinner table, and has you hugging the toilet repenting for your life in the bathroom; it makes you feel like the poet of the nightclub, the unquenchable fire at the center of the universe, until 10:00 AM the next morning, when your head feels like a cracked walnut, there's food residue on the corner of your mouth, and your soul shrinks into a corner. You finally realize that the person from last night, talking loudly and slamming the table, has officially become a drunkard.",
  },
};

export const TYPE_IMAGES = {
  IMSB: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAALwCAIAAABHo2d2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4nOy9aWMbR5ItmlutKOwAQVIkJVm2p6fvzP0w7///iZnb021bIkVxww5UAag1l/chakkslCjbsuRuhrttEEtVVlZW5okTJyKxUgo927M927M927M927P9OY187QY827M927M927M927P9emNfuwF/Jsv5qz0eC2P8NZrzbM/2bM/2bM/2bM9Q5tdbCWieccyzPduzPduzPdtXsy0o86ybATvEsiiko5fqTXy437Qj/Bakox/5mfv5FkwdGgm//dZ84tHD8K9/kgGwdbF46z+7bz/brzK1N1X90wyeZ3u2g/b7szL/YmQFXO6/xrU+2x9o+lr0PLye7dme7dk+YuwLMDGq/E/uTH7Wj7fb8xWpiL2e+UhHKV1CgzEuf4xLsPPkC3nsNAfv1J+RqvnkkPs2L0pvdsnNQFN/C3m23RtKHwBK5eyeUggjrLQDf4sd9JmmlCoeD4yQdnG/qQO/0cHzB9hOPyiktpiYz+6VZyz9bH8m+0a1Mt8e17G/+irtBdbflFLnzzHCvxO7q/IV9J9ost5FNX+SSwMcA/hVKQA0v9dd3uoVDCf5k3TL55iq4nQ5LvwdO/Bf2/ajS8/2bP/09rtBmSq75zdPR1teqvoK8/gBRxlWlEdoJqWhmXyKrhajz5+g1c5/dqcmvU/gRH+WpW7nzubvVSFJDJf2bSuEtrQyxYqsMPzza0d/2RvwooLyxX1GCOcn+2iHbHcdKg/zuc3RXu/+/DFS7eN36qNUHHTiY4/X5x3t2x48X9x+G47ReEeNW//X68Vn+/PZAShTrpRPXyb3l9snmir/QajUpu2c7w9erQ+drlhmtkJmWPuoMIwJRkr9Pq2VSiklpZJKKUooJXSrnQWC+rP6suXKpQXhyg/Vt8XJ7Vh1ezHOh8VvvwtKKSmllAIjTCghhCCEEca7Y+wbsN/hkdz78e/SgY8c+1/IftfZ4JsbeM/2bI/ZLpRRBW2+...(truncated as original)...",
};

export const NORMAL_TYPES = [
  { code: "CTRL", pattern: "HHH-HMH-MHH-HHH-MHM" },
  { code: "ATM-er", pattern: "HHH-HHM-HHH-HMH-MHL" },
  { code: "Dior-s", pattern: "MHM-MMH-MHM-HMH-LHL" },
  { code: "BOSS", pattern: "HHH-HMH-MMH-HHH-LHL" },
  { code: "THAN-K", pattern: "MHM-HMM-HHM-MMH-MHL" },
  { code: "OH-NO", pattern: "HHL-LMH-LHH-HHM-LHL" },
  { code: "GOGO", pattern: "HHM-HMH-MMH-HHH-MHM" },
  { code: "SEXY", pattern: "HMH-HHL-HMM-HMM-HLH" },
  { code: "LOVE-R", pattern: "MLH-LHL-HLH-MLM-MLH" },
  { code: "MUM", pattern: "MMH-MHL-HMM-LMM-HLL" },
  { code: "FAKE", pattern: "HLM-MML-MLM-MLM-HLH" },
  { code: "FKYEAH", pattern: "MMH-MMM-HML-LMM-MML" },
  { code: "MALO", pattern: "MLH-MHM-MLH-MLH-LMH" },
  { code: "JOKE-R", pattern: "LLH-LHL-LML-LLL-MLM" },
  { code: "WTF!", pattern: "HHL-HMH-MMH-HHM-LHH" },
  { code: "THIN-K", pattern: "HHL-HMH-MLH-MHM-LHH" },
  { code: "SHIT", pattern: "HHL-HLH-LMM-HHM-LHH" },
  { code: "ZZZZ", pattern: "MHL-MLH-LML-MML-LHM" },
  { code: "POOR", pattern: "HHL-MLH-LMH-HHH-LHL" },
  { code: "MONK", pattern: "HHL-LLH-LLM-MML-LHM" },
  { code: "DBFK", pattern: "LLM-LMM-LLL-LLL-MLM" },
  { code: "SOLO", pattern: "LML-LLH-LHL-LML-LHM" },
  { code: "FUCK", pattern: "MLL-LHL-LLM-MLL-HLH" },
  { code: "DEAD", pattern: "LLL-LLM-LML-LLL-LHM" },
  { code: "TRASH", pattern: "LLH-LHL-LML-LLL-MLL" },
];

export const DIM_EXPLANATIONS = {
  S1: {
    L: "You are harder on yourself than anyone else. Even a compliment makes you suspicious.",
    M: "Your confidence fluctuates with the weather — good days you soar, bad days you hide.",
    H: "You have a pretty solid sense of your own worth and aren’t easily shaken by random opinions.",
  },
  S2: {
    L: "Your inner radio has a lot of static. You often wonder “who am I really?”",
    M: "You usually know yourself, but emotions can still temporarily swap your identity.",
    H: "You know your personality, desires, and boundaries very clearly.",
  },
  S3: {
    L: "You prioritize comfort and safety over constant grinding.",
    M: "You want to improve but also want to chill — your values are constantly negotiating.",
    H: "You are strongly driven by goals, growth, or a deep personal belief.",
  },
  E1: {
    L: "Your relationship alarm is extremely sensitive. No reply = you already wrote the breakup story.",
    M: "You swing between trust and suspicion.",
    H: "You trust the relationship itself and don’t get shaken by small things.",
  },
  E2: {
    L: "You are emotionally guarded. The door is closed and the security system is on.",
    M: "You invest but keep a safety net.",
    H: "Once you commit, you go all in.",
  },
  E3: {
    L: "You easily become clingy and enjoy being clung to.",
    M: "You need both closeness and independence.",
    H: "Personal space is sacred — even in love you need your own territory.",
  },
  A1: {
    L: "You view the world with a built-in defense filter: suspect first, approach later.",
    M: "You are neither naive nor fully cynical.",
    H: "You prefer to believe in human goodness.",
  },
  A2: {
    L: "Rules are meant to be bent or broken if they feel restrictive.",
    M: "You follow rules when it makes sense and break them when it doesn’t.",
    H: "You value order and prefer to follow proper procedures.",
  },
  A3: {
    L: "You often feel life has very little meaning.",
    M: "Some days you have purpose, other days you just want to rot.",
    H: "You usually have a clear sense of direction.",
  },
  Ac1: {
    L: "You focus more on avoiding risk than chasing rewards.",
    M: "Your motivation is mixed — sometimes you push, sometimes you protect.",
    H: "You are driven by results, progress, and forward momentum.",
  },
  Ac2: {
    L: "You overthink decisions and your internal meeting often runs overtime.",
    M: "You think but don’t get stuck.",
    H: "You decide quickly and rarely look back.",
  },
  Ac3: {
    L: "You and deadlines have a special relationship — the later it gets, the stronger you become.",
    M: "You can execute but it depends on the mood.",
    H: "You have strong execution drive — unfinished tasks feel like thorns in your mind.",
  },
  So1: {
    L: "You warm up slowly in social situations.",
    M: "You go with the flow — if people come you chat, if not you don’t force it.",
    H: "You actively open conversations and enjoy being in the spotlight.",
  },
  So2: {
    L: "You want deep fusion once you trust someone.",
    M: "You balance closeness and personal space.",
    H: "Your boundaries are strong — too close and you instinctively step back.",
  },
  So3: {
    L: "You say what you think with very little filter.",
    M: "You read the room and balance honesty with politeness.",
    H: "You adapt your authenticity depending on the situation.",
  },
};

export const dimensionOrder = [
  "S1",
  "S2",
  "S3",
  "E1",
  "E2",
  "E3",
  "A1",
  "A2",
  "A3",
  "Ac1",
  "Ac2",
  "Ac3",
  "So1",
  "So2",
  "So3",
];
export const DRUNK_TRIGGER_QUESTION_ID = "drink_gate_q2";
