var words_ = ["", "$", "%", "'", "''", "'16", "'Cause", "'cause", "'d", "'ll", "'m", "'re", "'s", "'ve", ",", "--", ".", "...", "1", "1.3", "10", "100", "11th", "17", "1940s", "1990s", "1991", "2", "20", "2011", "2017", "25", "272", "28", "3", "30", "3D", "4", "47", "5", "50", "50-percent", "500", ":", ";", "?", "A", "Abraham", "Absolutely", "Afghanistan", "After", "Again", "Air", "Airport", "Al", "All", "Almost", "Also", "America", "American", "Americans", "An", "And", "Arabia", "As", "Asia", "At", "Avenue", "B-52s", "Be", "Beautiful", "Because", "Believe", "Benghazi", "Bernardino", "Biden", "Bridge", "Bridges", "Brotherhood", "Bush", "Businesses", "But", "By", "Ca", "Center", "China", "Chinese", "Christians", "Citizens", "Civil", "Clinton", "Coast", "Cold", "Cole", "Come", "Common", "Congress", "Congressman", "Containing", "Copenhagen", "Core", "Cuba", "Czech", "David", "Democrats", "Denmark", "Did", "Do", "Doctors", "Does", "Donald", "Dubai", "Each", "East", "Egypt", "Ending", "Euro", "Europe", "Events", "Everybody", "Everything", "Fences", "Finally", "First", "For", "Force", "Fourth", "Frankly", "GDP", "George", "Get", "Gorbachev", "Harbor", "Hard-working", "Has", "He", "Here", "Hillary", "History", "Horribly", "House", "I", "IRS", "ISIS", "If", "In", "Incredible", "Instead", "Interest", "Iowa", "Iran", "Iraq", "Is", "Islam", "Islamic", "Israel", "It", "Japanese", "Jeb", "Jobs", "Just", "Justice", "Kennedy", "Kenya", "King", "Korea", "LAX", "LG", "LaGuardia", "Laden", "Libya", "Lincoln", "Lives", "Logic", "Look", "Many", "Massachusetts", "Maybe", "Medicaid", "Medicare", "Mexico", "Middle", "Midwest", "Mitt", "Most", "Mr.", "Muslim", "My", "NATO", "National", "Navy", "Nazis", "New", "No", "Nobody", "North", "Not", "Nothing", "Now", "Nuclear", "Obama", "Obama-Clinton", "Obamacare", "Office", "Oh", "Ohio", "Old", "Olympics", "One", "Or", "Osama", "Our", "Party", "Pearl", "Penn.", "Pennsylvania", "Pentagon", "People", "Perhaps", "Pilots", "Poland", "Politicians", "Post", "President", "Qaeda", "Qatar", "Reagan", "Remember", "Republic", "Republican", "Republicans", "Right", "Roberts", "Romney", "Romneycare", "Russia", "Russians", "Ryan", "Samsung", "San", "Saudi", "Secondly", "Secretary", "Security", "September", "Since", "So", "Social", "Somebody", "Something", "South", "Southern", "Soviet", "States", "Steve", "Syria", "Tanzania", "Tea", "Thank", "That", "The", "Their", "Then", "There", "These", "They", "Think", "Thirdly", "This", "To", "Today", "Trade", "Trillion", "Trump", "U.S.", "U.S.S", "Unfortunately", "Union", "United", "Until", "Very", "Vice", "War", "Washington", "We", "What", "When", "White", "Who", "Why", "With", "World", "York", "You", "Your", "[", "]", "``", "a", "abandoned", "about", "above", "absolute", "absolutely", "accountants", "accused", "across", "acting", "action", "actions", "active", "actually", "adding", "address", "administration", "adversaries", "afford", "afforded", "after", "again", "against", "agenda", "aggression", "ago", "agreement", "agreements", "ah", "airplanes", "airport", "airports", "all", "allies", "allowed", "ally", "almost", "alone", "also", "always", "am", "amazingly", "ambassador", "amounts", "an", "and", "announced", "another", "any", "anybody", "anymore", "anyone", "anything", "apart", "apply", "appointed", "appreciate", "approaching", "approve", "approved", "are", "area", "areas", "armed", "army", "around", "arrogance", "arsenal", "artificial", "as", "ashamed", "aside", "ask", "asking", "asleep", "aspect", "asphalt", "ass", "assault", "at", "atrophy", "attack", "attacked", "attacks", "awake", "away", "back", "bad", "badly", "bah", "based", "basic", "basically", "battleships", "be", "beat", "beaten", "beating", "beautifully", "beauty", "became", "because", "become", "becomes", "becoming", "been", "before", "began", "beginning", "being", "believe", "believes", "benefited", "bent", "besides", "best", "better", "between", "bid", "big", "bigger", "billion", "bin", "bing", "blames", "blockade", "bomb", "bombing", "bone", "border", "borders", "both", "bound", "bows", "brave", "break", "breakup", "bridge", "bridges", "briefly", "bring", "broken", "brother", "budget", "build", "building", "buildings", "built", "burden", "business", "but", "by", "c", "ca", "call", "called", "came", "can", "candidate", "capability", "captured", "care", "careful", "case", "catastrophe", "catastrophes", "caused", "certain", "certainly", "cetain", "challengers", "chance", "change", "changer", "chaos", "chaotic", "charge", "charged", "chart", "cheapest", "choice", "choked", "citizens", "civilian", "civilians", "clarity", "clear", "clearsighted", "clock", "close", "closely", "closing", "clue", "coherent", "collapsed", "collapsing", "combat", "come", "comes", "coming", "commitment", "common", "communism", "companies", "company", "compete", "complete", "completed", "completely", "complex", "complicated", "conference", "confused", "confusion", "conservative", "constant", "consulate", "continue", "contribute", "control", "copied", "copying", "core", "corner", "corroded", "cost", "costs", "could", "countries", "country", "couple", "course", "court", "courts", "coverage", "covered", "crazy", "created", "creating", "criminals", "crippled", "criticized", "crooks", "crumbling", "crushes", "cut", "cuts", "cutter", "cutting", "cyber", "cycle", "d", "dangerous", "day", "days", "dead", "deal", "dealmaker", "deals", "debt", "decades", "decided", "decision", "declaratory", "deductibles", "defeat", "defeating", "defend", "defending", "defense", "deficit", "democracies", "democracy", "demonstrates", "depend", "depleted", "deserve", "desire", "desperately", "destroyed", "destroyers", "details", "deterrent", "devaluation", "devaluations", "devaluing", "develop", "dictator", "did", "didn", "differences", "different", "direction", "disappointed", "disarray", "disaster", "disastrous", "disgraceful", "dislike", "dislikes", "do", "doctor", "documentation", "does", "doesn", "doing", "dollar", "dollars", "dominance", "don", "done", "down", "dozens", "dry", "during", "duty", "e-mails", "each", "earlier", "easier", "easing", "easy", "eating", "economic", "economy", "edge", "effort", "eight", "either", "elected", "election", "else", "elsewhere", "embarrassing", "embassies", "employ", "end", "ended", "ends", "enemies", "enemy", "enforce", "engaged", "enormous", "enough", "enrichment", "ensure", "equipment", "especially", "espionage", "estate", "even", "event", "ever", "every", "everybody", "everyone", "everything", "example", "excuse", "executive", "expanded", "expands", "expense", "expensive", "experience", "extended", "extremism", "eyes", "fact", "failed", "fair", "fairly", "fall", "falling", "falls", "fan", "fanaticism", "fantastic", "far", "fast", "fat", "favor", "feel", "feet", "fence", "fences", "few", "fight", "fighting", "fights", "file", "fill", "filthy", "finally", "financial", "financially", "find", "finding", "finished", "first", "five", "fix", "fixing", "floor", "flying", "focusing", "fold", "folks", "following", "foolishness", "for", "force", "forces", "foreign", "forget", "forgiving", "formed", "forms", "forward", "foster", "foundation", "four", "fourth", "frankly", "fraud", "free", "friend", "friendly", "friends", "friendship", "from", "front", "funded", "further", "future", "game", "gave", "generally", "generals", "generation", "generous", "genocide", "get", "gets", "getting", "give", "gives", "giving", "global", "go", "goal", "goals", "goes", "going", "golfer", "gone", "good", "goods", "got", "government", "great", "greatest", "greet", "grossly", "ground", "group", "groups", "grow", "growth", "guard", "guess", "guns", "guts", "gutted", "guy", "guys", "had", "half", "halt", "hand", "happen", "happened", "happening", "happens", "hard", "has", "have", "he", "headed", "hear", "heard", "heat", "heed", "hell", "help", "helped", "helplessly", "here", "higher", "highways", "him", "his", "history", "hit", "hold", "holding", "hole", "home", "homeland", "honor", "honoring", "horrible", "horror", "hostility", "hot", "hotel", "hotels", "house", "how", "huge", "human", "humanitarian", "humiliation", "humiliations", "hundreds", "idea", "identify", "ideology", "if", "ignore", "immediately", "immigration", "impatient", "imperialists", "important", "importantly", "importing", "impossible", "improved", "in", "incident", "includes", "incompetent", "increase", "increases", "incredible", "indeed", "independence", "independents", "industrial", "informed", "infrastructure", "ink", "inside", "instance", "instead", "institutions", "intelligence", "intense", "interesting", "interests", "intervention", "interventions", "into", "investment", "invitation", "invite", "is", "issue", "it", "its", "itself", "jail", "job", "jobs", "judgment", "just", "justice", "justify", "justly", "keep", "kept", "kicked", "kicks", "killed", "king", "knew", "know", "known", "knows", "lack", "lacked", "lacks", "landed", "large", "last", "lasted", "laughed", "lawsuit", "lead", "leader", "leaders", "leadership", "leave", "led", "left", "legacy", "less", "let", "leverage", "lie", "lied", "lies", "life", "like", "liked", "likes", "likewise", "line", "list", "little", "live", "lives", "ll", "local", "location", "long", "long-term", "longer", "longstanding", "look", "looking", "lose", "lost", "lot", "love", "loved", "low", "lunch", "m", "made", "main", "major", "make", "makes", "making", "man", "mankind", "manufacturing", "many", "massive", "matter", "may", "me", "mean", "member", "mentioning", "mess", "message", "mettle", "might", "migrants", "military", "million", "millions", "minds", "mine", "minerals", "minimum", "minor", "misled", "missile", "missiles", "missions", "mistakes", "mode", "modernization", "moments", "money", "moneys", "month", "months", "moral", "more", "morning", "most", "mountain", "mounting", "much", "murder", "murdered", "must", "my", "myself", "n't", "name", "nation", "nation-building", "national", "nations", "nearly", "necessary", "need", "needs", "negotiated", "negotiation", "neither", "never", "new", "news", "next", "nice", "night", "no", "nobody", "not", "nothing", "now", "nuclear", "number", "numbered", "numbers", "o", "obligation", "of", "off", "office", "oh", "oil", "okay", "old", "older", "oldest", "on", "one", "one-third", "one-yard", "ones", "only", "open", "opinion", "opportunity", "opposed", "opposite", "or", "order", "ordered", "orders", "organization", "other", "our", "ouster", "out", "outline", "outside", "over", "overriding", "overturn", "owe", "own", "pa", "paperwork", "part", "parties", "path", "patients", "pause", "pay", "paying", "peace", "peacefully", "people", "percent", "period", "persecution", "person", "philosophical", "picked", "pilot", "place", "places", "plan", "planes", "plans", "please", "points", "policies", "policy", "political", "politicians", "politics", "position", "possible", "potential", "potholes", "power", "powerful", "precedent", "predictable", "prepared", "presidency", "president", "presidential", "press", "prestigious", "prevent", "principle", "printing", "priorities", "probably", "problem", "problems", "process", "product", "program", "promote", "properly", "proposed", "prosecuted", "prosper", "protect", "proud", "prove", "proven", "provide", "public", "pull", "purchase", "purpose", "pushes", "put", "qatar", "quick", "quickly", "quitting", "radical", "rails", "ran", "randomness", "rapidly", "rational", "re", "reach", "read", "reading", "real", "really", "reason", "reasons", "reassessment", "rebuild", "rebuilding", "recent", "recently", "recognize", "reducing", "refugees", "refuses", "refusing", "regain", "regard", "regime", "region", "regional", "rein", "relations", "reliable", "religious", "remains", "remember", "renewal", "repeal", "repealing", "replace", "replaced", "replaces", "replacing", "reports", "require", "required", "resect", "resources", "respect", "respects", "result", "return", "revenues", "rich", "rid", "ride", "rifles", "right", "rise", "risk", "rivals", "roadways", "roof", "room", "run", "running", "runs", "runways", "rush", "rust", "rusted", "s", "sad", "sadly", "safer", "said", "sailors", "same", "sand", "save", "saved", "saving", "savings", "saw", "say", "saying", "says", "schools", "scores", "secretary", "secrets", "sections", "securing", "security", "see", "seek", "seemed", "seen", "sell", "selling", "send", "sending", "sense", "senseless", "serious", "seriously", "serve", "servicemen", "set", "sets", "seven", "shake", "shambles", "share", "shared", "she", "ships", "shocking", "shooting", "shops", "short", "should", "shrunk", "side", "sight", "simple", "simply", "single", "sink", "site", "situation", "situations", "six", "sleep", "small", "smaller", "smart", "snubbed", "so", "soldiers", "solve", "some", "somebody", "someone", "something", "sort", "sounds", "space", "speak", "special", "speech", "spend", "spending", "spent", "spread", "stability", "stage", "stand", "standing", "start", "started", "starting", "state", "statement", "statements", "steal", "stick", "stop", "stopping", "strategy", "street", "streets", "strength", "strong", "stronger", "strongly", "struggle", "struggles", "stuff", "stupid", "subject", "subsidies", "succeed", "successful", "such", "sucker", "sudden", "sued", "suffer", "summing", "superiority", "support", "supported", "surprised", "t", "table", "take", "takes", "taking", "talk", "talking", "tank", "tax", "tear", "technological", "teleprompter", "teleprompters", "television", "televisions", "tell", "ten", "tender", "tensions", "terminal", "terms", "terraza", "terrible", "terrorism", "terrorists", "test", "than", "thank", "that", "the", "theft", "their", "them", "theme", "themselves", "then", "there", "these", "they", "thing", "things", "think", "thinking", "this", "those", "thought", "thousands", "threatened", "three", "three-footer", "through", "throw", "time", "timeless", "times", "to", "today", "together", "too", "took", "tore", "total", "totalitarianism", "totally", "tougher", "tournament", "toward", "trade", "treat", "treated", "treatment", "treaty", "tremendous", "tremendously", "trillion", "trillions", "trip", "troops", "trouble", "true", "truly", "truth", "trying", "two", "two-way", "ultimate", "unbelievable", "under", "understand", "understanding", "understands", "unfair", "uniforms", "unjust", "unleash", "unleashed", "unless", "unprecedented", "unpredictable", "unquestioned", "unstable", "unthinkable", "until", "up", "upon", "us", "use", "uses", "using", "vacuum", "various", "ve", "veered", "very", "veterans", "vets", "video", "vigilant", "violence", "virtually", "vision", "visions", "vividly", "voices", "void", "walk", "walking", "wall", "want", "wanted", "wants", "war", "warfare", "warming", "warriors", "was", "waste", "wasted", "wasteful", "watch", "watched", "watches", "watching", "water", "way", "we", "weak", "weaken", "weakened", "weakening", "weakness", "weaknesses", "wealth", "weapon", "weapons", "website", "websites", "week", "well", "went", "were", "western", "what", "when", "whenever", "where", "whether", "which", "while", "white", "who", "whole", "why", "will", "willing", "win", "wisely", "wish", "with", "without", "wo", "woman", "women", "won", "wonderful", "word", "words", "work", "workers", "working", "works", "world", "worry", "worse", "worst", "would", "wounded", "writing", "wrong", "wrote", "year", "years", "yet", "you", "your", "\u2014", "\u2019"];