const quotes = [
	{
	"quote": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
	"author": "Dr. Seuss",
	"category": "Motivation"
	},
	{
	  "quote": "Get busy living or get busy dying.",
	  "author": "Stephen King",
	  "category": "Motivation"
	},
  
	{
	  "quote": "I have absolutely no pleasure in the stimulants in which I sometimes so madly indulge. It has not been in the pursuit of pleasure that I have periled life and reputation and reason. It has been the desperate attempt to escape from torturing memories, from a sense of insupportable loneliness and a dread of some strange impending doom.",
	  "author": "Edgar Allen Poe",
	  "category": "Drinking, Addiction"
	},
	{
	  "quote":"If life were predictable it would cease to be life, and be without flavor.", 
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.",
	  "author": "Ernest Hemingway",
	  "category": "Drinking"
	},
	{
	  "quote": "I've gotten more out of alcohol than alcohol has taken out of me.",
	  "author": "Winston Churchill",
	  "category": "Drinking"
	},
	{
	  "quote": "People are dying. Entire ecosystems are collapsing. We are in the beginning of a mass extinction. And all you can talk about is money and fairytales of eternal economic growth. How dare you!",
	  "author": "Greta Thunberg"
	},
	{
	  "quote": "The Greeks created gods that were in their image; warlike but creative, wise but ferocious, loving but jealous, tender but brutal, compassionate, but vengeful.",
	  "author": "Stephen Fry",
	  "category": "Mythos: The Greek Myths Retold"
	},
	{
	  "quote": "Genius is patience.",
	  "author": "Isaac Newton"
	},
	{
		  "quote": "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
	  "author": " Roy T. Bennett",
	  "category": "The Light in the Heart"
	},
	{
	  "quote": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
	  "author": "Roy T. Bennett",
	  "category": "The Light in the Heart"
	},
	 {
	  "quote": "Instead of worrying about what you cannot control, shift your energy to what you can create.",
	  "author": " Roy T. Bennett",
	  "category": "The Light in the Heart"
	},
	{
	  "quote": "If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.",
	  "author": " Roy T. Bennett",
	  "category": "The Light in the Heart"
	},
	 {
	  "quote": "Take responsibility of your own happiness, never put it in other people’s hands.",
	  "author": " Roy T. Bennett",
	  "category": "The Light in the Heart"
	},
	{
	  "quote": "Everything will turn out right, the world is built on that.",
	  "author": "Mikhail Bulgakov",
	  "category": "Master and Margarita"
	},
	{
	  "quote": "If there is meaning in life at all, then there must be meaning in suffering.",
	  "author": "Victor Frankl",
	  "category": "Man's Search for Meaning"
	},
	{
	  "quote": "If I feel physically as if the top of my head were taken off, I know that is poetry.",
	  "author": "Emilie Dickinson"
	},
	{
	  "quote": "Man is sometimes extraordinarily, passionately, in love with suffering.",
	  "author": "Fyodor Dostoevsky",
	  "category": "Notes From Underground"
	},
	 { "quote": "It has to start somewhere, it has to start sometime, what better place than here? What better time than now?",
	  "author": "Zack de la Rocha"
	},
	{
	  "quote": "Yes I know my enemies. They're the teachers who taught me to fight me, compromise, conformity, assimilation, submission, ignorance, hypocrisy, brutality, the elite, all of which are American dreams.",
	  "author": "Zack de la Rocha"
	},
	{
	  "quote": "One of the great things about young people is that they do question, that they do care deeply about justice, and they they have open minds.",
	  "author": "Zack de la Rocha"
	},
	{
	  "quote": "Winter is Coming",
	  "author": "Pretty Much EveryOne",
	  "category": "got"
	},
	{
	  "quote": "The man who passes the sentence should swing the sword.",
	  "author": "Ned Stark",
	  "category": "got"
	},
	{
	  "quote": "The things I do for love.",
	  "author": "Jaime Lannister",
	  "category": "got"
	},
	{
	  "quote": "I have a tender spot in my heart for cripples, bastards and broken things.",
	  "author": "Tyrion",
	  "category": "got"
	},
	{
	  "quote": "When you play the game of thrones, you win or you die.",
	  "author": "Cersei",
	  "category": "got"
	},
	{
	  "quote": "I grew up with soldiers. I learned how to die a long time ago.",
	  "author": "Ned Stark",
	  "category": "got"
	},
	{
	  "quote": "Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.",
	  "author": "Tyrion",
	  "category": "got"
	},
	{
	  "quote": "Everyone is mine to torment.",
	  "author": "Joffrey",
	  "category": "got"
	},
	{
	  "quote": "The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.",
	  "author": "Tyrion",
	  "category": "got"
	},
	{
	  "quote": "The night is dark and full of terrors.",
	  "author": "Melisandre",
	  "category": "got"
	},
	{
	  "quote": "You know nothing, Jon Snow.",
	  "author": "Ygritte",
	  "category": "got"
	},
	{
	  "quote": "Night gathers, and now my watch begins",
	  "author": "Members of Nights Watch",
	  "category": "got"
	},
	{
	  "quote": "A Lannister always pays his debts.",
	  "author": "A Lannister",
	  "category": "got"
	},
	{
	  "quote": "Burn them all!",
	  "author": "Aerys II Targaryen",
	  "category": "got"
	},
	{
	  "quote": "What do we say to the God of death?",
	  "author": "Syrio Forel",
	  "category": "got"
	},
	{
	  "quote": "There's no cure for being a c*nt.",
	  "author": "Bronn",
	  "category": "got"
	},
	{
	  "quote": "I've seen wet shits I like better than Walder Frey.",
	  "author": "Brynden Tully",
	  "category": "got"
	},
	{
	  "quote": "That's what I do: I drink and I know things.",
	  "author": "Tyrion",
	  "category": "got"
	},
	{
	  "quote": "A lion does not concern himself with the opinion of sheep.",
	  "author": "Tywin",
	  "category": "got"
	},
	{
	  "quote": "Chaos isn't a pit. Chaos is a ladder.",
	  "author": "Little Finger",
	  "category": "got"
	},
	{
	  "quote": "Power resides where men believe it resides. It's a trick; a shadow on the wall.",
	  "author": "Varys",
	  "category": "got"
	},
	{
	  "quote": "I understand that if any more words come pouring out your c*nt mouth, I'm gonna have to eat every f*cking chicken in this room.",
	  "author": "The Hound",
	  "category": "got"
	},
	{
	  "quote": "If you think this has a happy ending, you haven't been paying attention.",
	  "author": "Ramsay ",
	  "category": "got"
	},
	{
	  "quote": "A girl is Arya Stark of Winterfell. And I'm going home.",
	  "author": "Arya Stark",
	  "category": "got"
	},
	{
	  "quote": "Any man who must say 'I am the King' is no true King.",
	  "author": "Tywin",
	  "category": "got"
	},
	{
	  "quote": "I read it in a book.",
	  "author": "Samwell Tarly",
	  "category": "got"
	},
	{
	  "quote": "If I fall, don't bring me back.",
	  "author": "Jon snow",
	  "category": "got"
	},
	{
	  "quote": "Hold the door!",
	  "author": "Hodor/Wylis",
	  "category": "got"
	},
	{
	  "quote": "I don't plan on knitting by the fire while men fight for me.",
	  "author": "Lyanna Mormont",
	  "category": "got"
	},
	{
	  "quote": "When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.",
	  "author": "Arya Stark",
	  "category": "got"
	},
	{
	  "quote": "Nothing f*cks you harder than time",
	  "author": "Ser Davos Seaworth",
	  "category": "got"
	},
	{
	  "quote": "There is only one war that matters. The Great War. And it is here.",
	  "author": "Jon snow",
	  "category": "got"
	},
	{
	  "quote": "The first draft is just you telling yourself the story",
	  "author": "Chinua Achebe"
	},
	{
	  "quote": "I can shake off everything as I write; my sorrows disappear, my courage is reborn",
	  "author": "Anne Frank"
	},
	{
	  "quote": "A professional writer is an amateur who didn�t quit",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "You can observe a lot just by watching.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "A house divided against itself cannot stand.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Difficulties increase the nearer we get to the goal.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Fate is in your hands and no one elses",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Be the chief but never the lord.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Nothing happens unless first we dream.",
	  "author": "Carl Sandburg"
	},
	{
	  "quote": "Well begun is half done.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Life is a learning experience, only if you learn.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "Self-complacency is fatal to progress.",
	  "author": "Margaret Sangster"
	},
	{
	  "quote": "Peace comes from within. Do not seek it without.",
	  "author": "Buddha"
	},
	{
	  "quote": "What you give is what you get.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "We can only learn to love by loving.",
	  "author": "Iris Murdoch"
	},
	{
	  "quote": "Life is change. Growth is optional. Choose wisely.",
	  "author": "Karen Clark"
	},
	{
	  "quote": "You'll see it when you believe it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Today is the tomorrow we worried about yesterday.",
	  "author": ""
	},
	{
	  "quote": "It's easier to see the mistakes on someone else's paper.",
	  "author": ""
	},
	{
	  "quote": "Every man dies. Not every man really lives.",
	  "author": ""
	},
	{
	  "quote": "To lead people walk behind them.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Having nothing, nothing can he lose.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Trouble is only opportunity in work clothes.",
	  "author": "Henry J. Kaiser"
	},
	{
	  "quote": "A rolling stone gathers no moss.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Ideas are the beginning points of all fortunes.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Everything in life is luck.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "Doing nothing is better than being busy doing nothing.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Trust yourself. You know more than you think you do.",
	  "author": "Benjamin Spock"
	},
	{
	  "quote": "Study the past, if you would divine the future.",
	  "author": "Confucius"
	},
	{
	  "quote": "The day is already blessed, find peace within it.",
	  "author": ""
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "Well done is better than well said.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Bite off more than you can chew, then chew it.",
	  "author": "Ella Williams"
	},
	{
	  "quote": "Work out your own salvation. Do not depend on others.",
	  "author": "Buddha"
	},
	{
	  "quote": "One today is worth two tomorrows.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Once you choose hope, anythings possible.",
	  "author": "Christopher Reeve"
	},
	{
	  "quote": "God always takes the simplest way.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "One fails forward toward success.",
	  "author": "Charles Kettering"
	},
	{
	  "quote": "From small beginnings come great things.",
	  "author": ""
	},
	{
	  "quote": "Learning is a treasure that will follow its owner everywhere",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Be as you wish to seem.",
	  "author": "Socrates"
	},
	{
	  "quote": "The world is always in movement.",
	  "author": "V. Naipaul"
	},
	{
	  "quote": "Never mistake activity for achievement.",
	  "author": "John Wooden"
	},
	{
	  "quote": "What worries you masters you.",
	  "author": "Haddon Robinson"
	},
	{
	  "quote": "One faces the future with ones past.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "Goals are the fuel in the furnace of achievement.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "Who sows virtue reaps honour.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Be kind whenever possible. It is always possible.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Talk doesn't cook rice.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "He is able who thinks he is able.",
	  "author": "Buddha"
	},
	{
	  "quote": "Be as you wish to seem.",
	  "author": "Socrates"
	},
	{
	  "quote": "A goal without a plan is just a wish.",
	  "author": "Larry Elder"
	},
	{
	  "quote": "To succeed, we must first believe that we can.",
	  "author": "Michael Korda"
	},
	{
	  "quote": "Learn from yesterday, live for today, hope for tomorrow.",
	  "author": "Albert Einstein"
	},
	{
	  "quote":"My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
	  "author":"Steve Jobs"
	},
	{
	  "quote": "A weed is no more than a flower in disguise.",
	  "author": "James Lowell"
	},
	{
	  "quote": "Do, or do not. There is no try.",
	  "author": "Yoda"
	},
	{
	  "quote": "All serious daring starts from within.",
	  "author": "Harriet Beecher Stowe"
	},
	{
	  "quote": "The best teacher is experience learned from failures.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Think how hard physics would be if particles could think.",
	  "author": "Murray Gell-Mann"
	},
	{
	  "quote": "Don't wait. The time will never be just right.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "One fails forward toward success.",
	  "author": "Charles Kettering"
	},
	{
	  "quote": "Time is the wisest counsellor of all.",
	  "author": "Pericles"
	},
	{
	  "quote": "You give before you get.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Wisdom begins in wonder.",
	  "author": "Socrates"
	},
	{
	  "quote": "Without courage, wisdom bears no fruit.",
	  "author": "Baltasar Gracian"
	},
	{
	  "quote": "Change in all things is sweet.",
	  "author": "Aristotle"
	},
	{
	  "quote": "What you fear is that which requires action to overcome.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The best teacher is experience learned from failures.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "When performance exceeds ambition, the overlap is called success.",
	  "author": "Cullen Hightower"
	},
	{
	  "quote": "When deeds speak, words are nothing.",
	  "author": "African proverb"
	},
	{
	  "quote": "Real magic in relationships means an absence of judgement of others.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "When performance exceeds ambition, the overlap is called success.",
	  "author": "Cullen Hightower"
	},
	{
	  "quote": "I never think of the future. It comes soon enough.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Skill to do comes of doing.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Wisdom is the supreme part of happiness.",
	  "author": "Sophocles"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Important principles may, and must, be inflexible.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "The undertaking of a new action brings new strength.",
	  "author": "Richard Evans"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Our distrust is very expensive.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "All know the way; few actually walk it.",
	  "author": "Bodhidharma"
	},
	{
	  "quote": "Great talent finds happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Faith in oneself is the best and safest course.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "Courage is going from failure to failure without losing enthusiasm.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "The two most powerful warriors are patience and time.",
	  "author": "Leo Tolstoy"
	},
	{
	  "quote": "Anticipate the difficult by managing the easy.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Talk doesn't cook rice.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "A short saying often contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "The day is already blessed, find peace within it.",
	  "author": ""
	},
	{
	  "quote": "It takes both sunshine and rain to make a rainbow.",
	  "author": ""
	},
	{
	  "quote": "A beautiful thing is never perfect.",
	  "author": ""
	},
	{
	  "quote": "Only do what your heart tells you.",
	  "author": "Princess Diana"
	},
	{
	  "quote": "Life is movement-we breathe, we eat, we walk, we move!",
	  "author": "John Pierrakos"
	},
	{
	  "quote": "No one can make you feel inferior without your consent.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "One fails forward toward success.",
	  "author": "Charles Kettering"
	},
	{
	  "quote": "Argue for your limitations, and sure enough theyre yours.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Luck is what happens when preparation meets opportunity.",
	  "author": "Seneca"
	},
	{
	  "quote": "Victory belongs to the most persevering.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Once you choose hope, anythings possible.",
	  "author": "Christopher Reeve"
	},
	{
	  "quote": "Love all, trust a few, do wrong to none.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "In order to win, you must expect to win.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "A goal is a dream with a deadline.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Set your goals high, and don't stop till you get there.",
	  "author": "Bo Jackson"
	},
	{
	  "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Every new day is another chance to change your life.",
	  "author": ""
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Nobody will believe in you unless you believe in yourself.",
	  "author": "Liberace"
	},
	{
	  "quote": "Be kind whenever possible. It is always possible.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Do more than dream: work.",
	  "author": "William Arthur Ward"
	},
	{
	  "quote": "No man was ever wise by chance.",
	  "author": "Seneca"
	},
	{
	  "quote": "Some pursue happiness, others create it.",
	  "author": ""
	},
	{
	  "quote": "It's easier to see the mistakes on someone else's paper.",
	  "author": ""
	},
	{
	  "quote": "Think how hard physics would be if particles could think.",
	  "author": "Murray Gell-Mann"
	},
	{
	  "quote": "Well begun is half done.",
	  "author": "Aristotle"
	},
	{
	  "quote": "He that is giddy thinks the world turns round.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Don't ruin the present with the ruined past.",
	  "author": "Ellen Gilchrist"
	},
	{
	  "quote": "Do something wonderful, people may imitate it.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "We do what we do because we believe.",
	  "author": ""
	},
	{
	  "quote": "Great talent finds happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Do one thing every day that scares you.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "If you cannot be silent be brilliant and thoughtful.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Who looks outside, dreams; who looks inside, awakes.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "What we think, we become.",
	  "author": "Buddha"
	},
	{
	  "quote": "The shortest answer is doing.",
	  "author": "Lord Herbert"
	},
	{
	  "quote": "All our knowledge has its origins in our perceptions.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "He is able who thinks he is able.",
	  "author": "Buddha"
	},
	{
	  "quote": "The harder you fall, the higher you bounce.",
	  "author": ""
	},
	{
	  "quote": "Trusting our intuition often saves us from disaster.",
	  "author": "Anne Wilson Schaef"
	},
	{
	  "quote": "Truth is powerful and it prevails.",
	  "author": "Sojourner Truth"
	},
	{
	  "quote": "Talk doesn't cook rice.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Light tomorrow with today!",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "Silence is a fence around wisdom.",
	  "author": "German proverb"
	},
	{
	  "quote": "Society develops wit, but its contemplation alone forms genius.",
	  "author": "Madame de Stael"
	},
	{
	  "quote": "Society develops wit, but its contemplation alone forms genius.",
	  "author": "Madame de Stael"
	},
	{
	  "quote": "Real magic in relationships means an absence of judgement of others.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "We can only learn to love by loving.",
	  "author": "Iris Murdoch"
	},
	{
	  "quote": "The simplest things are often the truest.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "What you give is what you get.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Everyone smiles in the same language.",
	  "author": ""
	},
	{
	  "quote": "A short saying often contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Yesterday I dared to struggle. Today I dare to win.",
	  "author": "Bernadette Devlin"
	},
	{
	  "quote": "Victory belongs to the most persevering.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "No alibi will save you from accepting the responsibility.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "If you can dream it, you can do it.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "It is better to travel well than to arrive.",
	  "author": "Buddha"
	},
	{
	  "quote": "Life shrinks or expands in proportion to one's courage.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "You have to believe in yourself.",
	  "author": "Sun Tzu"
	},
	{
	  "quote": "Our intention creates our reality.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Silence is a true friend who never betrays.",
	  "author": "Confucius"
	},
	{
	  "quote": "Character develops itself in the stream of life.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "From little acorns mighty oaks do grow.",
	  "author": "American proverb"
	},
	{
	  "quote": "You have to believe in yourself.",
	  "author": "Sun Tzu"
	},
	{
	  "quote": "You can't stop the waves, but you can learn to surf.",
	  "author": "Jon Kabat-Zinn"
	},
	{
	  "quote": "Reality does not conform to the ideal, but confirms it.",
	  "author": "Gustave Flaubert"
	},
	{
	  "quote": "Speak low, if you speak love.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "A really great talent finds its happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Reality leaves a lot to the imagination.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Our intention creates our reality.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Society develops wit, but its contemplation alone forms genius.",
	  "author": "Madame de Stael"
	},
	{
	  "quote": "The greatest remedy for anger is delay.",
	  "author": "Seneca"
	},
	{
	  "quote": "Growth itself contains the germ of happiness.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "You can do what's reasonable or you can decide what's possible.",
	  "author": ""
	},
	{
	  "quote": "Nothing strengthens authority so much as silence.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Wherever you go, go with all your heart.",
	  "author": "Confucius"
	},
	{
	  "quote": "The only real valuable thing is intuition.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Good luck is another name for tenacity of purpose.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Rainbows apologize for angry skies.",
	  "author": "Sylvia Voirol"
	},
	{
	  "quote": "Friendship isn't a big thing. It's a million little things.",
	  "author": ""
	},
	{
	  "quote": "Time is the most valuable thing a man can spend.",
	  "author": "Theophrastus"
	},
	{
	  "quote": "Whatever happens, take responsibility.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Experience is simply the name we give our mistakes.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "I think and that is all that I am.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "A good plan today is better than a perfect plan tomorrow.",
	  "author": ""
	},
	{
	  "quote": "Be as you wish to seem.",
	  "author": "Socrates"
	},
	{
	  "quote": "If the shoe doesn't fit, must we change the foot?",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "Each day provides its own gifts.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "While we stop to think, we often miss our opportunity.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Life isn't about finding yourself. Life is about creating yourself.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "To bring anything into your life, imagine that it's already there.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Begin to weave and God will give you the thread.",
	  "author": "German proverb"
	},
	{
	  "quote": "The more you know yourself, the more you forgive yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "Someone remembers, someone cares; your name is whispered in someone's prayers.",
	  "author": ""
	},
	{
	  "quote": "Without faith, nothing is possible. With it, nothing is impossible.",
	  "author": "Mary Bethune"
	},
	{
	  "quote": "What worries you masters you.",
	  "author": "Haddon Robinson"
	},
	{
	  "quote": "Once we accept our limits, we go beyond them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Don't be pushed by your problems; be led by your dreams.",
	  "author": ""
	},
	{
	  "quote": "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "Everything you can imagine is real.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "The shortest answer is doing.",
	  "author": "Lord Herbert"
	},
	{
	  "quote": "A beautiful thing is never perfect.",
	  "author": ""
	},
	{
	  "quote": "Fear is a darkroom where negatives develop.",
	  "author": "Usman Asif"
	},
	{
	  "quote": "The simplest things are often the truest.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The truest wisdom is a resolute determination.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Life is the flower for which love is the honey.",
	  "author": "Victor Hugo"
	},
	{
	  "quote": "Freedom is the right to live as we wish.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Change your thoughts, change your life!",
	  "author": ""
	},
	{
	  "quote": "Never ignore a gut feeling, but never believe that it's enough.",
	  "author": "Robert Heller"
	},
	{
	  "quote": "Loss is nothing else but change,and change is Natures delight.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Someone is special only if you tell them.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Great talent finds happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Today is the tomorrow you worried about yesterday.",
	  "author": ""
	},
	{
	  "quote": "There is no way to happiness, happiness is the way.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "The day always looks brighter from behind a smile.",
	  "author": ""
	},
	{
	  "quote": "A beautiful thing is never perfect.",
	  "author": ""
	},
	{
	  "quote": "No alibi will save you from accepting the responsibility.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Argue for your limitations, and sure enough theyre yours.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "You can observe a lot just by watching.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "Reality leaves a lot to the imagination.",
	  "author": "John Lennon"
	},
	{
	  "quote": "A stumble may prevent a fall.",
	  "author": ""
	},
	{
	  "quote": "He who talks more is sooner exhausted.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Well begun is half done.",
	  "author": "Aristotle"
	},
	{
	  "quote": "He who is contented is rich.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Work out your own salvation. Do not depend on others.",
	  "author": "Buddha"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "What we achieve inwardly will change outer reality.",
	  "author": "Plutarch"
	},
	{
	  "quote": "We must become the change we want to see.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Happiness is found in doing, not merely possessing.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Put your future in good hands � your own.",
	  "author": ""
	},
	{
	  "quote": "We choose our destiny in the way we treat others.",
	  "author": "Wit"
	},
	{
	  "quote": "Time is the most valuable thing a man can spend.",
	  "author": "Theophrastus"
	},
	{
	  "quote": "No snowflake in an avalanche ever feels responsible.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Fortune favours the brave.",
	  "author": "Virgil"
	},
	{
	  "quote": "I believe in one thing only, the power of human will.",
	  "author": "Joseph Stalin"
	},
	{
	  "quote": "The more you know yourself, the more you forgive yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "The best way out is always through.",
	  "author": "Robert Frost"
	},
	{
	  "quote": "The mind unlearns with difficulty what it has long learned.",
	  "author": "Seneca"
	},
	{
	  "quote": "I destroy my enemies when I make them my friends.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "No garden is without its weeds.",
	  "author": "Thomas Fuller"
	},
	{
	  "quote": "There is no failure except in no longer trying.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "Kind words will unlock an iron door.",
	  "author": "Turkish proverb"
	},
	{
	  "quote": "Problems are only opportunities with thorns on them.",
	  "author": "Hugh Miller"
	},
	{
	  "quote": "Life is just a chance to grow a soul.",
	  "author": "A. Powell Davies"
	},
	{
	  "quote": "Reality does not conform to the ideal, but confirms it.",
	  "author": "Gustave Flaubert"
	},
	{
	  "quote": "If you can dream it, you can do it.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "Mountains cannot be surmounted except by winding paths.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "May our hearts garden of awakening bloom with hundreds of flowers.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Nobody will believe in you unless you believe in yourself.",
	  "author": "Liberace"
	},
	{
	  "quote": "Fortune befriends the bold.",
	  "author": "John Dryden"
	},
	{
	  "quote": "Keep true to the dreams of thy youth.",
	  "author": "Friedrich von Schiller"
	},
	{
	  "quote": "You're never a loser until you quit trying.",
	  "author": "Mike Ditka"
	},
	{
	  "quote": "Science is organized knowledge. Wisdom is organized life.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "Knowing is not enough; we must apply!",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Strong beliefs win strong men, and then make them stronger.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Autumn is a second spring when every leaf is a flower.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "If you surrender to the wind, you can ride it.",
	  "author": "Toni Morrison"
	},
	{
	  "quote": "Character develops itself in the stream of life.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "We must become the change we want to see.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Keep yourself to the sunshine and you cannot see the shadow.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Write your plans in pencil and give God the eraser.",
	  "author": "Paulo Coelho"
	},
	{
	  "quote": "Inspiration exists, but it has to find us working.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "All serious daring starts from within.",
	  "author": "Harriet Beecher Stowe"
	},
	{
	  "quote": "Pick battles big enough to matter, small enough to win.",
	  "author": "Jonathan Kozol"
	},
	{
	  "quote": "Don't compromise yourself. You are all you've got.",
	  "author": "Janis Joplin"
	},
	{
	  "quote": "He that is giddy thinks the world turns round.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "A short saying oft contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Difficulties are things that show a person what they are.",
	  "author": "Epictetus"
	},
	{
	  "quote": "When you doubt your power, you give power to your doubt.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "The cause is hidden. The effect is visible to all.",
	  "author": "Ovid"
	},
	{
	  "quote": "A weed is no more than a flower in disguise.",
	  "author": "James Lowell"
	},
	{
	  "quote": "Keep true to the dreams of thy youth.",
	  "author": "Friedrich von Schiller"
	},
	{
	  "quote": "A prudent question is one half of wisdom.",
	  "author": "Francis Bacon"
	},
	{
	  "quote": "The path to success is to take massive, determined action.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "I allow my intuition to lead my path.",
	  "author": "Manuel Puig"
	},
	{
	  "quote": "Nature takes away any faculty that is not used.",
	  "author": "William R. Inge"
	},
	{
	  "quote": "All our knowledge has its origins in our perceptions.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "If the shoe doesn't fit, must we change the foot?",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "Life shrinks or expands in proportion to one's courage.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "May our hearts garden of awakening bloom with hundreds of flowers.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "If you wish to be a writer, write.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Today is the tomorrow we worried about yesterday.",
	  "author": ""
	},
	{
	  "quote": "There is no way to prosperity, prosperity is the way.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Talk doesn't cook rice.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Wherever you go, go with all your heart.",
	  "author": "Confucius"
	},
	{
	  "quote": "Either you run the day or the day runs you.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "Write your plans in pencil and give God the eraser.",
	  "author": "Paulo Coelho"
	},
	{
	  "quote": "Better be ignorant of a matter than half know it.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Follow your instincts. That is where true wisdom manifests itself.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "There never was a good knife made of bad steel.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "To accomplish great things, we must dream as well as act.",
	  "author": "Anatole France"
	},
	{
	  "quote": "Patience is the companion of wisdom.",
	  "author": "Saint Augustine"
	},
	{
	  "quote": "The mind is everything. What you think you become.",
	  "author": "Buddha"
	},
	{
	  "quote": "To enjoy life, we must touch much of it lightly.",
	  "author": "Voltaire"
	},
	{
	  "quote": "To fly, we have to have resistance.",
	  "author": "Maya Lin"
	},
	{
	  "quote": "The more you know yourself, the more you forgive yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "What you see depends on what you're looking for.",
	  "author": ""
	},
	{
	  "quote": "The heart has its reasons which reason knows not of.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "When you doubt your power, you give power to your doubt.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "Be great in act, as you have been in thought.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Imagination rules the world.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Kind words do not cost much. Yet they accomplish much.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Wherever you go, go with all your heart.",
	  "author": "Confucius"
	},
	{
	  "quote": "In order to win, you must expect to win.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "You're never a loser until you quit trying.",
	  "author": "Mike Ditka"
	},
	{
	  "quote": "There is no greater harm than that of time wasted.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "Intuition will tell the thinking mind where to look next.",
	  "author": "Jonas Salk"
	},
	{
	  "quote": "Nature takes away any faculty that is not used.",
	  "author": "William R. Inge"
	},
	{
	  "quote": "Doing nothing is better than being busy doing nothing.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "It is better to travel well than to arrive.",
	  "author": "Buddha"
	},
	{
	  "quote": "Once you choose hope, anythings possible.",
	  "author": "Christopher Reeve"
	},
	{
	  "quote": "Worry gives a small thing a big shadow.",
	  "author": ""
	},
	{
	  "quote": "Do, or do not. There is no try.",
	  "author": "Yoda"
	},
	{
	  "quote": "Fears are nothing more than a state of mind.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Mountains cannot be surmounted except by winding paths.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "May our hearts garden of awakening bloom with hundreds of flowers.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "The journey of a thousand miles begins with one step.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Don't be pushed by your problems; be led by your dreams.",
	  "author": ""
	},
	{
	  "quote": "Efficiency is doing things right; effectiveness is doing the right things.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "The greatest remedy for anger is delay.",
	  "author": "Seneca"
	},
	{
	  "quote": "Worry gives a small thing a big shadow.",
	  "author": ""
	},
	{
	  "quote": "Blaze with the fire that is never extinguished.",
	  "author": "Luisa Sigea"
	},
	{
	  "quote": "Don't cry because it's over. Smile because it happened.",
	  "author": "Dr. Seuss"
	},
	{
	  "quote": "Time is the wisest counsellor of all.",
	  "author": "Pericles"
	},
	{
	  "quote": "No is easier to do. Yes is easier to say.",
	  "author": "Jason Fried"
	},
	{
	  "quote": "From little acorns mighty oaks do grow.",
	  "author": "American proverb"
	},
	{
	  "quote": "To be wrong is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Write your plans in pencil and give God the eraser.",
	  "author": "Paulo Coelho"
	},
	{
	  "quote": "Once we accept our limits, we go beyond them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "He who talks more is sooner exhausted.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "I never think of the future. It comes soon enough.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Whatever happens, take responsibility.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Yesterdays home runs don't win today's games.",
	  "author": "Babe Ruth"
	},
	{
	  "quote": "The world is always in movement.",
	  "author": "V. Naipaul"
	},
	{
	  "quote": "Inspiration exists, but it has to find us working.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "Silence is deep as Eternity, Speech is shallow as Time.",
	  "author": "Carlyle"
	},
	{
	  "quote": "Don't smother each other. No one can grow in the shade.",
	  "author": "Leo F. Buscaglia"
	},
	{
	  "quote": "We must become the change we want to see.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "An ant on the move does more than a dozing ox",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "You can't shake hands with a clenched fist.",
	  "author": "Indira Gandhi"
	},
	{
	  "quote": "A good decision is based on knowledge and not on numbers.",
	  "author": "Plato"
	},
	{
	  "quote": "Once we accept our limits, we go beyond them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The cautious seldom err.",
	  "author": "Confucius"
	},
	{
	  "quote": "Ideas are the beginning points of all fortunes.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Every man dies. Not every man really lives.",
	  "author": ""
	},
	{
	  "quote": "If there is no struggle, there is no progress.",
	  "author": "Frederick Douglass"
	},
	{
	  "quote": "There is no way to prosperity, prosperity is the way.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Where there is great love, there are always miracles.",
	  "author": "Willa Cather"
	},
	{
	  "quote": "Trusting our intuition often saves us from disaster.",
	  "author": "Anne Wilson Schaef"
	},
	{
	  "quote": "Friendship isn't a big thing. It's a million little things.",
	  "author": ""
	},
	{
	  "quote": "Goals are the fuel in the furnace of achievement.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "Each day provides its own gifts.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Time you enjoy wasting, was not wasted.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Every problem has a gift for you in its hands.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Sadness flies away on the wings of time.",
	  "author": "Jean de la Fontaine"
	},
	{
	  "quote": "The only real valuable thing is intuition.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Fortune befriends the bold.",
	  "author": "John Dryden"
	},
	{
	  "quote": "I have often regretted my speech, never my silence.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "May our hearts garden of awakening bloom with hundreds of flowers.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "I destroy my enemies when I make them my friends.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Sadness flies away on the wings of time.",
	  "author": "Jean de la Fontaine"
	},
	{
	  "quote": "Never put off till tomorrow what you can do today.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "Minds are like parachutes. They only function when open.",
	  "author": "Thomas Dewar"
	},
	{
	  "quote": "If a man does his best, what else is there?",
	  "author": "George Patton"
	},
	{
	  "quote": "The secret of success is constancy to purpose.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Imagination rules the world.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Well begun is half done.",
	  "author": "Aristotle"
	},
	{
	  "quote": "The best way out is always through.",
	  "author": "Robert Frost"
	},
	{
	  "quote": "Without faith, nothing is possible. With it, nothing is impossible.",
	  "author": "Mary Bethune"
	},
	{
	  "quote": "Life is a progress, and not a station.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "All seasons are beautiful for the person who carries happiness within.",
	  "author": "Horace Friess"
	},
	{
	  "quote": "To avoid criticism, do nothing, say nothing, be nothing.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "Whatever happens, take responsibility.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "All things change; nothing perishes.",
	  "author": "Ovid"
	},
	{
	  "quote": "No one can make you feel inferior without your consent.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Absence makes the heart grow fonder.",
	  "author": "Haynes Bayly"
	},
	{
	  "quote": "Imagination is the highest kite one can fly.",
	  "author": "Lauren Bacall"
	},
	{
	  "quote": "Don't be pushed by your problems; be led by your dreams.",
	  "author": ""
	},
	{
	  "quote": "Nothing happens unless first we dream.",
	  "author": "Carl Sandburg"
	},
	{
	  "quote": "Minds are like parachutes. They only function when open.",
	  "author": "Thomas Dewar"
	},
	{
	  "quote": "The beginning of knowledge is the discovery of something we do not understand.",
	  "author": "Frank Herbert"
	},
	{
	  "quote": "Love doesn't make the world go round, love is what makes the ride worthwhile.",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
	  "author": "J. Willard Marriott"
	},
	{
	  "quote": "I believe that we are fundamentally the same and have the same basic potential.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The winds and waves are always on the side of the ablest navigators.",
	  "author": "Edward Gibbon"
	},
	{
	  "quote": "The future belongs to those who believe in the beauty of their dreams.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "To get something you never had, you have to do something you never did.",
	  "author": ""
	},
	{
	  "quote": "Be thankful when you don't know something for it gives you the opportunity to learn.",
	  "author": ""
	},
	{
	  "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "The winds and waves are always on the side of the ablest navigators.",
	  "author": "Edward Gibbon"
	},
	{
	  "quote": "To forgive is to set a prisoner free and realize that prisoner was you.",
	  "author": "Lewis B. Smedes"
	},
	{
	  "quote": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
	  "author": "Buddha"
	},
	{
	  "quote": "By believing passionately in something that does not yet exist, we create it.",
	  "author": "Nikos Kazantzakis"
	},
	{
	  "quote": "Letting go isn�t the end of the world; it�s the beginning of a new life.",
	  "author": ""
	},
	{
	  "quote": "All the great performers I have worked with are fuelled by a personal dream.",
	  "author": "John Eliot"
	},
	{
	  "quote": "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
	  "author": "A. A. Milne"
	},
	{
	  "quote": "I never see what has been done; I only see what remains to be done.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "Begin at once to live and count each separate day as a separate life.",
	  "author": "Seneca"
	},
	{
	  "quote": "If you don't know where you are going, you will probably end up somewhere else.",
	  "author": "Lawrence Peter"
	},
	{
	  "quote": "Love doesn't make the world go round, love is what makes the ride worthwhile.",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "It is not so important to know everything as to appreciate what we learn.",
	  "author": "Hannah More"
	},
	{
	  "quote": "The bird of paradise alights only upon the hand that does not grasp.",
	  "author": "John Berry"
	},
	{
	  "quote": "Think as a wise man but communicate in the language of the people.",
	  "author": "William Yeats"
	},
	{
	  "quote": "Practice yourself, for heavens sake in little things, and then proceed to greater.",
	  "author": "Epictetus"
	},
	{
	  "quote": "If one does not know to which port is sailing, no wind is favorable.",
	  "author": "Seneca"
	},
	{
	  "quote": "Our greatest glory is not in never failing but rising everytime we fall.",
	  "author": ""
	},
	{
	  "quote": "Being right is highly overrated. Even a stopped clock is right twice a day.",
	  "author": ""
	},
	{
	  "quote": "To be upset over what you don't have is to waste what you do have.",
	  "author": "Ken S. Keyes"
	},
	{
	  "quote": "If we did the things we are capable of, we would astound ourselves.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Nothing in life is to be feared. It is only to be understood.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "Successful people ask better questions, and as a result, they get better answers.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Love is not blind; it simply enables one to see things others fail to see.",
	  "author": ""
	},
	{
	  "quote": "Life is a process. We are a process. The universe is a process.",
	  "author": "Anne Schaef"
	},
	{
	  "quote": "I think somehow we learn who we really are and then live with that decision.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "We learn what we have said from those who listen to our speaking.",
	  "author": "Kenneth Patton"
	},
	{
	  "quote": "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "If you get up one more time than you fall, you will make it through.",
	  "author": ""
	},
	{
	  "quote": "The beginning of knowledge is the discovery of something we do not understand.",
	  "author": "Frank Herbert"
	},
	{
	  "quote": "The doors we open and close each day decide the lives we live.",
	  "author": "Flora Whittemore"
	},
	{
	  "quote": "The worst bankrupt in the world is the person who has lost his enthusiasm.",
	  "author": "H. W. Arnold"
	},
	{
	  "quote": "Happiness comes when your work and words are of benefit to yourself and others.",
	  "author": "Buddha"
	},
	{
	  "quote": "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Don't focus on making the right decision, focus on making the decision the right one.",
	  "author": ""
	},
	{
	  "quote": "Everything is perfect in the universe � even your desire to improve it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Begin at once to live and count each separate day as a separate life.",
	  "author": "Seneca"
	},
	{
	  "quote": "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
	  "author": "Eden Phillpotts"
	},
	{
	  "quote": "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
	  "author": "Buddha"
	},
	{
	  "quote": "A thing long expected takes the form of the unexpected when at last it comes.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "To forgive is to set a prisoner free and realize that prisoner was you.",
	  "author": "Lewis B. Smedes"
	},
	{
	  "quote": "Action may not always bring happiness; but there is no happiness without action.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "I don't believe in failure. It is not failure if you enjoyed the process.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "What you do not want done to yourself, do not do to others.",
	  "author": "Confucius"
	},
	{
	  "quote": "Short words are best and the old words when short are best of all.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "If you light a lamp for somebody, it will also brighten your path.",
	  "author": "Buddha"
	},
	{
	  "quote": "I have done my best: that is about all the philosophy of living one needs.",
	  "author": "Lin-yutang"
	},
	{
	  "quote": "Through perseverance many people win success out of what seemed destined to be certain failure.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Give thanks for the rain of life that propels us to reach new horizons.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Love is just a word until someone comes along and gives it meaning.",
	  "author": ""
	},
	{
	  "quote": "We all have problems. The way we solve them is what makes us different.",
	  "author": ""
	},
	{
	  "quote": "The secret to a rich life is to have more beginnings than endings.",
	  "author": "Dave Weinbaum"
	},
	{
	  "quote": "It is only when the mind and character slumber that the dress can be seen.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "If you don't like something, change it. If you can't change it, change your attitude.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Nothing in life is to be feared. It is only to be understood.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
	  "author": "Confucius"
	},
	{
	  "quote": "The world is a book, and those who do not travel read only a page.",
	  "author": "Augustinus Sanctus"
	},
	{
	  "quote": "Action may not always bring happiness; but there is no happiness without action.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "So long as a person is capable of self-renewal they are a living being.",
	  "author": "Henri-Frederic Amiel"
	},
	{
	  "quote": "I'm not afraid of storms, for Im learning how to sail my ship.",
	  "author": "Louisa Alcott"
	},
	{
	  "quote": "Think for yourselves and let others enjoy the privilege to do so too.",
	  "author": "Voltaire"
	},
	{
	  "quote": "How we spend our days is, of course, how we spend our lives.",
	  "author": "Annie Dillard"
	},
	{
	  "quote": "It has never been my object to record my dreams, just to realize them.",
	  "author": "Man Ray"
	},
	{
	  "quote": "The most complicated achievements of thought are possible without the assistance of consciousness.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Most great people have attained their greatest success just one step beyond their greatest failure.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "The doors we open and close each day decide the lives we live.",
	  "author": "Flora Whittemore"
	},
	{
	  "quote": "If you think you can, you can. And if you think you can't, you're right.",
	  "author": "Henry Ford"
	},
	{
	  "quote": "Better to have loved and lost, than to have never loved at all.",
	  "author": "St. Augustine"
	},
	{
	  "quote": "Everyone thinks of changing the world, but no one thinks of changing himself.",
	  "author": "Leo Tolstoy"
	},
	{
	  "quote": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "The best way to pay for a lovely moment is to enjoy it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Slow down and everything you are chasing will come around and catch you.",
	  "author": "John De Paola"
	},
	{
	  "quote": "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
	  "author": "Buddha"
	},
	{
	  "quote": "I always wanted to be somebody, but I should have been more specific.",
	  "author": "Lily Tomlin"
	},
	{
	  "quote": "Yeah we all shine on, like the moon, and the stars, and the sun.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
	  "author": "Martin Fischer"
	},
	{
	  "quote": "Life is like riding a bicycle. To keep your balance you must keep moving.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "We should all be thankful for those people who rekindle the inner spirit.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
	  "author": "Buddha"
	},
	{
	  "quote": "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
	  "author": "Confucius"
	},
	{
	  "quote": "To get something you never had, you have to do something you never did.",
	  "author": ""
	},
	{
	  "quote": "What you do not want done to yourself, do not do to others.",
	  "author": "Confucius"
	},
	{
	  "quote": "Opportunity is missed by most because it is dressed in overalls and looks like work.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Feeling and longing are the motive forces behind all human endeavor and human creations.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "In the end we retain from our studies only that which we practically apply.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "If you correct your mind, the rest of your life will fall into place.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The world makes way for the man who knows where he is going.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
	  "author": "John Adams"
	},
	{
	  "quote": "I cannot make my days longer so I strive to make them better.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "Think for yourselves and let others enjoy the privilege to do so too.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Tension is who you think you should be. Relaxation is who you are.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Never bend your head. Always hold it high. Look the world right in the eye.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "We cannot do everything at once, but we can do something at once.",
	  "author": "Calvin Coolidge"
	},
	{
	  "quote": "You have to do your own growing no matter how tall your grandfather was.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
	  "author": ""
	},
	{
	  "quote": "It is fatal to enter any war without the will to win it.",
	  "author": "General Douglas MacArthur"
	},
	{
	  "quote": "Be what you are. This is the first step toward becoming better than you are.",
	  "author": "Julius Charles Hare"
	},
	{
	  "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
	  "author": "Buckminster Fuller"
	},
	{
	  "quote": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "Love and compassion open our own inner life, reducing stress, distrust and loneliness.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "The superior man is satisfied and composed; the mean man is always full of distress.",
	  "author": "Confucius"
	},
	{
	  "quote": "If you spend too much time thinking about a thing, you'll never get it done.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "The way is not in the sky. The way is in the heart.",
	  "author": "Buddha"
	},
	{
	  "quote": "I don't believe in failure. It is not failure if you enjoyed the process.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Most people are about as happy as they make up their minds to be",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Three things cannot be long hidden: the sun, the moon, and the truth.",
	  "author": "Buddha"
	},
	{
	  "quote": "More often than not, anger is actually an indication of weakness rather than of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Before you put on a frown, make absolutely sure there are no smiles available.",
	  "author": "Jim Beggs"
	},
	{
	  "quote": "A man of ability and the desire to accomplish something can do anything.",
	  "author": "Donald Kircher"
	},
	{
	  "quote": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
	  "author": "Buddha"
	},
	{
	  "quote": "It is not uncommon for people to spend their whole life waiting to start living.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "We learn what we have said from those who listen to our speaking.",
	  "author": "Kenneth Patton"
	},
	{
	  "quote": "The way is not in the sky. The way is in the heart.",
	  "author": "Buddha"
	},
	{
	  "quote": "Don't be afraid to go out on a limb. That's where the fruit is.",
	  "author": "H. Jackson Browne"
	},
	{
	  "quote": "Wicked people are always surprised to find ability in those that are good.",
	  "author": "Marquis Vauvenargues"
	},
	{
	  "quote": "Life is so constructed that an event does not, cannot, will not, match the expectation.",
	  "author": "Charlotte Bronte"
	},
	{
	  "quote": "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "If you change the way you look at things, the things you look at change.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "No man can succeed in a line of endeavor which he does not like.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Think for yourselves and let others enjoy the privilege to do so too.",
	  "author": "Voltaire"
	},
	{
	  "quote": "You will not be punished for your anger, you will be punished by your anger.",
	  "author": "Buddha"
	},
	{
	  "quote": "The future belongs to those who believe in the beauty of their dreams.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "I believe that we are fundamentally the same and have the same basic potential.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "They say that time changes things, but you actually have to change them yourself.",
	  "author": "Andy Warhol"
	},
	{
	  "quote": "Never apologize for showing feelings. When you do so, you apologize for the truth.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "The truth you believe and cling to makes you unavailable to hear anything new.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
	  "author": "Horace"
	},
	{
	  "quote": "The winds and waves are always on the side of the ablest navigators.",
	  "author": "Edward Gibbon"
	},
	{
	  "quote": "If you light a lamp for somebody, it will also brighten your path.",
	  "author": "Buddha"
	},
	{
	  "quote": "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
	  "author": "Morris West"
	},
	{
	  "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "Every action of our lives touches on some chord that will vibrate in eternity.",
	  "author": "Edwin Chapin"
	},
	{
	  "quote": "Letting go isn�t the end of the world; it�s the beginning of a new life.",
	  "author": ""
	},
	{
	  "quote": "Shoot for the moon. Even if you miss, you'll land among the stars.",
	  "author": "Les Brown"
	},
	{
	  "quote": "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
	  "author": "Buddha"
	},
	{
	  "quote": "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
	  "author": "Horace"
	},
	{
	  "quote": "I'm not afraid of storms, for Im learning how to sail my ship.",
	  "author": "Louisa Alcott"
	},
	{
	  "quote": "It does not matter how slowly you go as long as you do not stop.",
	  "author": "Confucius"
	},
	{
	  "quote": "Every day may not be good, but there's something good in every day.",
	  "author": ""
	},
	{
	  "quote": "The truth you believe and cling to makes you unavailable to hear anything new.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "To forgive is to set a prisoner free and realize that prisoner was you.",
	  "author": "Lewis B. Smedes"
	},
	{
	  "quote": "Most folks are about as happy as they make up their minds to be.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "If you would take, you must first give, this is the beginning of intelligence.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Some people think it's holding that makes one strong � sometimes it's letting go.",
	  "author": ""
	},
	{
	  "quote": "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
	  "author": "Eden Phillpotts"
	},
	{
	  "quote": "It is on our failures that we base a new and different and better success.",
	  "author": "Havelock Ellis"
	},
	{
	  "quote": "If you spend too much time thinking about a thing, you'll never get it done.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Quality is never an accident; it is always the result of intelligent effort.",
	  "author": "John Ruskin"
	},
	{
	  "quote": "To study and not think is a waste. To think and not study is dangerous.",
	  "author": "Confucius"
	},
	{
	  "quote": "Life is a succession of lessons, which must be lived to be understood.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Being right is highly overrated. Even a stopped clock is right twice a day.",
	  "author": ""
	},
	{
	  "quote": "Love is just a word until someone comes along and gives it meaning.",
	  "author": ""
	},
	{
	  "quote": "I have done my best: that is about all the philosophy of living one needs.",
	  "author": "Lin-yutang"
	},
	{
	  "quote": "Time changes everything except something within us which is always surprised by change.",
	  "author": "Thomas Hardy"
	},
	{
	  "quote": "You are important enough to ask and you are blessed enough to receive back.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Our greatest glory is not in never failing but rising everytime we fall.",
	  "author": ""
	},
	{
	  "quote": "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
	  "author": "Martin Fischer"
	},
	{
	  "quote": "It is fatal to enter any war without the will to win it.",
	  "author": "General Douglas MacArthur"
	},
	{
	  "quote": "If you spend too much time thinking about a thing, you'll never get it done.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "To get something you never had, you have to do something you never did.",
	  "author": ""
	},
	{
	  "quote": "If you cannot do great things, do small things in a great way.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Everything is perfect in the universe � even your desire to improve it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "If you want your life to be more rewarding, you have to change the way you think.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
	  "author": "Leonardo Ruiz"
	},
	{
	  "quote": "The free man is he who does not fear to go to the end of his thought.",
	  "author": "Leon Blum"
	},
	{
	  "quote": "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
	  "author": "Charles Dickens"
	},
	{
	  "quote": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
	  "author": "Sam Keen"
	},
	{
	  "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
	  "author": "Walt Emerson"
	},
	{
	  "quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
	  "author": "John Astin"
	},
	{
	  "quote": "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
	  "author": "John Astin"
	},
	{
	  "quote": "There is no retirement for an artist, it's your way of living so there is no end to it.",
	  "author": "Henry Moore"
	},
	{
	  "quote": "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
	  "author": "Confucius"
	},
	{
	  "quote": "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
	  "author": ""
	},
	{
	  "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
	  "author": "Laozi"
	},
	{
	  "quote": "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
	  "author": "George Sheehan"
	},
	{
	  "quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
	  "author": "Marcel Proust"
	},
	{
	  "quote": "Make the best use of what is in your power, and take the rest as it happens.",
	  "author": "Epictetus"
	},
	{
	  "quote": "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
	  "author": "Louise Hay"
	},
	{
	  "quote": "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
	  "author": "W. Clement Stone"
	},
	{
	  "quote": "The reason most goals are not achieved is that we spend our time doing second things first.",
	  "author": "Robert McKain"
	},
	{
	  "quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
	  "author": "John Quincy Adams"
	},
	{
	  "quote": "I'm a great believer in luck and I find the harder I work, the more I have of it.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The person born with a talent they are meant to use will find their greatest happiness in using it.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
	  "author": "William Saroyan"
	},
	{
	  "quote": "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
	  "author": "Henry Van Dyke"
	},
	{
	  "quote": "The person born with a talent they are meant to use will find their greatest happiness in using it.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "You got to be careful if you don't know where you're going, because you might not get there.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
	  "author": "Naguib Mahfouz"
	},
	{
	  "quote": "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
	  "author": "John Wooden"
	},
	{
	  "quote": "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
	  "author": "Jane Addams"
	},
	{
	  "quote": "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
	  "author": "M. Scott Peck"
	},
	{
	  "quote": "The minute you settle for less than you deserve, you get even less than you settled for.",
	  "author": "Maureen Dowd"
	},
	{
	  "quote": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
	  "author": "Charles Darwin"
	},
	{
	  "quote": "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
	  "author": ""
	},
	{
	  "quote": "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "There is only one success � to be able to spend your life in your own way.",
	  "author": "Christopher Morley"
	},
	{
	  "quote": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
	  "author": "Hannah Arendt"
	},
	{
	  "quote": "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.",
	  "author": "Alan Cohen"
	},
	{
	  "quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "There is only one corner of the universe you can be certain of improving, and that's your own self.",
	  "author": "Aldous Huxley"
	},
	{
	  "quote": "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
	  "author": "Marian Edelman"
	},
	{
	  "quote": "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
	  "author": "Sue Patton Thoele"
	},
	{
	  "quote": "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
	  "author": "Frank Crane"
	},
	{
	  "quote": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
	  "author": "Kathleen Norris"
	},
	{
	  "quote": "Choose a job you love, and you will never have to work a day in your life.",
	  "author": "Confucius"
	},
	{
	  "quote": "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
	  "author": "Anne Bronte"
	},
	{
	  "quote": "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
	  "author": "Desiderius Erasmus"
	},
	{
	  "quote": "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
	  "author": "Arthur Rubinstein"
	},
	{
	  "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
	  "author": "Louis Pasteur"
	},
	{
	  "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
	  "author": "Rumi"
	},
	{
	  "quote": "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
	  "author": "Sogyal Rinpoche"
	},
	{
	  "quote": "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.",
	  "author": "Dennis Kimbro"
	},
	{
	  "quote": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
	  "author": "William Penn"
	},
	{
	  "quote": "There is no retirement for an artist, it's your way of living so there is no end to it.",
	  "author": "Henry Moore"
	},
	{
	  "quote": "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
	  "author": "Buddha"
	},
	{
	  "quote": "As the rest of the world is walking out the door, your best friends are the ones walking in.",
	  "author": ""
	},
	{
	  "quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
	  "author": "Robert Lynd"
	},
	{
	  "quote": "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
	  "author": "William Penn"
	},
	{
	  "quote": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "The person born with a talent they are meant to use will find their greatest happiness in using it.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
	  "author": "Sam Keen"
	},
	{
	  "quote": "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
	  "author": "Robert Fulghum"
	},
	{
	  "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
	  "author": "Charles Darwin"
	},
	{
	  "quote": "Every man takes the limits of his own field of vision for the limits of the world.",
	  "author": "Arthur Schopenhauer"
	},
	{
	  "quote": "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
	  "author": "Sai Baba"
	},
	{
	  "quote": "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Life is like a sewer. What you get out of it depends on what you put into it.",
	  "author": "Tom Lehrer"
	},
	{
	  "quote": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
	  "author": "Alfred Sheinwold"
	},
	{
	  "quote": "There is only one corner of the universe you can be certain of improving, and that's your own self.",
	  "author": "Aldous Huxley"
	},
	{
	  "quote": "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
	  "author": "Sri Chinmoy"
	},
	{
	  "quote": "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
	  "author": "James Freeman Clarke"
	},
	{
	  "quote": "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
	  "author": "John Wooden"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
	  "author": "Hannah Arendt"
	},
	{
	  "quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
	  "author": "Alfred Sheinwold"
	},
	{
	  "quote": "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
	  "author": "Desiderius Erasmus"
	},
	{
	  "quote": "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
	  "author": "Buddha"
	},
	{
	  "quote": "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
	  "author": "Sydney Smith"
	},
	{
	  "quote": "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "Those who try to do something and fail are infinitely better than those who try nothing and succeed.",
	  "author": "Lloyd Jones"
	},
	{
	  "quote": "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.",
	  "author": "Vista Kelly"
	},
	{
	  "quote": "The first step to getting the things you want out of life is this: decide what you want.",
	  "author": "Ben Stein"
	},
	{
	  "quote": "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
	  "author": ""
	},
	{
	  "quote": "Experience is not what happens to a man. It is what a man does with what happens to him.",
	  "author": "Aldous Huxley"
	},
	{
	  "quote": "A good teacher is like a candle � it consumes itself to light the way for others.",
	  "author": ""
	},
	{
	  "quote": "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Life is not measured by the breaths we take, but by the moments that take our breath.",
	  "author": ""
	},
	{
	  "quote": "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
	  "author": "Jacob Braude"
	},
	{
	  "quote": "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
	  "author": "Vince Lombardi"
	},
	{
	  "quote": "What lies behind us and what lies before us are small matters compared to what lies within us.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
	  "author": "Nelson Mandela"
	},
	{
	  "quote": "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Forget about all the reasons why something may not work. You only need to find one good reason why it will.",
	  "author": "Robert Anthony"
	},
	{
	  "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
	  "author": "Washington Irving"
	},
	{
	  "quote": "We all live with the objective of being happy; our lives are all different and yet the same.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
	  "author": "Louis Pasteur"
	},
	{
	  "quote": "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
	  "author": "Buddha"
	},
	{
	  "quote": "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
	  "author": "Jessamyn West"
	},
	{
	  "quote": "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
	  "author": "Plato"
	},
	{
	  "quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
	  "author": "Charlotte Gilman"
	},
	{
	  "quote": "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
	  "author": "Margaret Runbeck"
	},
	{
	  "quote": "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
	  "author": "William Penn"
	},
	{
	  "quote": "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
	  "author": "Ovid"
	},
	{
	  "quote": "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
	  "author": "Marian Edelman"
	},
	{
	  "quote": "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "We never understand how little we need in this world until we know the loss of it.",
	  "author": "James Barrie"
	},
	{
	  "quote": "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
	  "author": ""
	},
	{
	  "quote": "The real measure of your wealth is how much youd be worth if you lost all your money.",
	  "author": ""
	},
	{
	  "quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
	  "author": "Buddha"
	},
	{
	  "quote": "Life is like a sewer. What you get out of it depends on what you put into it.",
	  "author": "Tom Lehrer"
	},
	{
	  "quote": "Take no thought of who is right or wrong or who is better than. Be not for or against.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
	  "author": "Everett Dirksen"
	},
	{
	  "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
	  "author": "Rumi"
	},
	{
	  "quote": "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
	  "author": "Henry Miller"
	},
	{
	  "quote": "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
	  "author": "William Saroyan"
	},
	{
	  "quote": "At the center of your being you have the answer; you know who you are and you know what you want.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
	  "author": "Niels Bohr"
	},
	{
	  "quote": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Everyone is a genius at least once a year. A real genius has his original ideas closer together.",
	  "author": "Georg Lichtenberg"
	},
	{
	  "quote": "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "Sadness may be part of life but there is no need to let it dominate your entire life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.",
	  "author": "Charles Schwab"
	},
	{
	  "quote": "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
	  "author": "Barbara Baron"
	},
	{
	  "quote": "You are always free to change your mind and choose a different future, or a different past.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "You got to be careful if you don't know where you're going, because you might not get there.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "To be what we are, and to become what we are capable of becoming, is the only end of life.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
	  "author": "Charles DeLint"
	},
	{
	  "quote": "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
	  "author": ""
	},
	{
	  "quote": "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
	  "author": "Paavo Nurmi"
	},
	{
	  "quote": "The real measure of your wealth is how much youd be worth if you lost all your money.",
	  "author": ""
	},
	{
	  "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
	  "author": ""
	},
	{
	  "quote": "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "The first step to getting the things you want out of life is this: decide what you want.",
	  "author": "Ben Stein"
	},
	{
	  "quote": "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
	  "author": "Henry Van Dyke"
	},
	{
	  "quote": "It is one of the blessings of old friends that you can afford to be stupid with them.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
	  "author": "Tryon Edwards"
	},
	{
	  "quote": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "One must be fond of people and trust them if one is not to make a mess of life.",
	  "author": "E. M. Forster"
	},
	{
	  "quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
	  "author": "John Astin"
	},
	{
	  "quote": "We cannot change our memories, but we can change their meaning and the power they have over us.",
	  "author": "David Seamans"
	},
	{
	  "quote": "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
	  "author": "Confucius"
	},
	{
	  "quote": "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
	  "author": "Charles DeLint"
	},
	{
	  "quote": "Id rather regret the things that I have done than the things that I have not done.",
	  "author": "Lucille Ball"
	},
	{
	  "quote": "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "If the stars should appear but one night every thousand years how man would marvel and adore.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	  "author": "Laurence J. Peter"
	},
	{
	  "quote": "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
	  "author": "Elizabeth Arden"
	},
	{
	  "quote": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
	  "author": "Hannah Arendt"
	},
	{
	  "quote": "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
	  "author": "Confucius"
	},
	{
	  "quote": "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
	  "author": "Nikola Tesla"
	},
	{
	  "quote": "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.",
	  "author": "Leo Aikman"
	},
	{
	  "quote": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
	  "author": "Leonardo Ruiz"
	},
	{
	  "quote": "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
	  "author": "Vernon Cooper"
	},
	{
	  "quote": "One secret of success in life is for a man to be ready for his opportunity when it comes.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The shoe that fits one person pinches another; there is no recipe for living that suits all cases.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
	  "author": "Buddha"
	},
	{
	  "quote": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
	  "author": ""
	},
	{
	  "quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	  "author": "Laurence J. Peter"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "There is only one success � to be able to spend your life in your own way.",
	  "author": "Christopher Morley"
	},
	{
	  "quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
	  "author": "Nelson Mandela"
	},
	{
	  "quote": "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "If you focus on results, you will never change. If you focus on change, you will get results.",
	  "author": "Jack Dixon"
	},
	{
	  "quote": "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
	  "author": "G. K. Chesterton"
	},
	{
	  "quote": "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
	  "author": "W. Clement Stone"
	},
	{
	  "quote": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
	  "author": "John Quincy Adams"
	},
	{
	  "quote": "Experience is not what happens to a man. It is what a man does with what happens to him.",
	  "author": "Aldous Huxley"
	},
	{
	  "quote": "All difficult things have their origin in that which is easy, and great things in that which is small.",
	  "author": "Lao-Tzu"
	},
	{
	  "quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
	  "author": "Confucius"
	},
	{
	  "quote": "You can be what you want to be. You have the power within and we will help you always.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
	  "author": "Johannes Gaertner"
	},
	{
	  "quote": "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
	  "author": "Doug Larson"
	},
	{
	  "quote": "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
	  "author": "Charles Lamb"
	},
	{
	  "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "The first step to getting the things you want out of life is this: decide what you want.",
	  "author": "Ben Stein"
	},
	{
	  "quote": "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
	  "author": "John Muir"
	},
	{
	  "quote": "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
	  "author": "Jacob Braude"
	},
	{
	  "quote": "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
	  "author": "Everett Dirksen"
	},
	{
	  "quote": "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
	  "author": "Buddha"
	},
	{
	  "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
	  "author": "William Ward"
	},
	{
	  "quote": "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
	  "author": "Michael Jordan"
	},
	{
	  "quote": "The first step to getting the things you want out of life is this: decide what you want.",
	  "author": "Ben Stein"
	},
	{
	  "quote": "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "You are always free to change your mind and choose a different future, or a different past.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
	  "author": "Confucius"
	},
	{
	  "quote": "Id rather regret the things that I have done than the things that I have not done.",
	  "author": "Lucille Ball"
	},
	{
	  "quote": "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
	  "author": "Epictetus"
	},
	{
	  "quote": "The person born with a talent they are meant to use will find their greatest happiness in using it.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "I am always doing that which I cannot do, in order that I may learn how to do it.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "The world is round and the place which may seem like the end may also be the beginning.",
	  "author": "Ivy Baker Priest"
	},
	{
	  "quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	  "author": ""
	},
	{
	  "quote": "Give it all you've got because you never know if there's going to be a next time.",
	  "author": "Danielle Ingrum"
	},
	{
	  "quote": "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
	  "author": "Vernon Cooper"
	},
	{
	  "quote": "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
	  "author": "Old German proverb"
	},
	{
	  "quote": "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
	  "author": "Ralph Blum"
	},
	{
	  "quote": "Im not in this world to live up to your expectations and you're not in this world to live up to mine.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
	  "author": "Confucius"
	},
	{
	  "quote": "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
	  "author": "Barbara Baron"
	},
	{
	  "quote": "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "I am always doing that which I cannot do, in order that I may learn how to do it.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.",
	  "author": "Walter Cronkite"
	},
	{
	  "quote": "The greatest way to live with honor in this world is to be what we pretend to be.",
	  "author": "Socrates"
	},
	{
	  "quote": "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
	  "author": "Seneca"
	},
	{
	  "quote": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
	  "author": "George Sheehan"
	},
	{
	  "quote": "If you want your life to be more rewarding, you have to change the way you think.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
	  "author": "Chalmers"
	},
	{
	  "quote": "By living deeply in the present moment we can understand the past better and we can prepare for a better future.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
	  "author": "Buddha"
	},
	{
	  "quote": "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
	  "author": "Charles Dickens"
	},
	{
	  "quote": "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
	  "author": "Robert Louis Stevenson"
	},
	{
	  "quote": "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	  "author": "Laurence J. Peter"
	},
	{
	  "quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
	  "author": ""
	},
	{
	  "quote": "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
	  "author": "Charles DeLint"
	},
	{
	  "quote": "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
	  "author": "Joan Didion"
	},
	{
	  "quote": "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
	  "author": "Mabel Newcomber"
	},
	{
	  "quote": "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
	  "author": "Confucius"
	},
	{
	  "quote": "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
	  "author": ""
	},
	{
	  "quote": "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
	  "author": ""
	},
	{
	  "quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
	  "author": "John Astin"
	},
	{
	  "quote": "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
	  "author": "Charles Lamb"
	},
	{
	  "quote": "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
	  "author": "Robert Graves"
	},
	{
	  "quote": "All difficult things have their origin in that which is easy, and great things in that which is small.",
	  "author": "Lao-Tzu"
	},
	{
	  "quote": "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
	  "author": "Frank Wright"
	},
	{
	  "quote": "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
	  "author": "Francois de La Rochefoucauld"
	},
	{
	  "quote": "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
	  "author": "Epictetus"
	},
	{
	  "quote": "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
	  "author": "Margaret Cousins"
	},
	{
	  "quote": "One secret of success in life is for a man to be ready for his opportunity when it comes.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "One must be fond of people and trust them if one is not to make a mess of life.",
	  "author": "E. M. Forster"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you�ll never get back.",
	  "author": ""
	},
	{
	  "quote": "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
	  "author": "Epictetus"
	},
	{
	  "quote": "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
	  "author": "Alfred Tennyson"
	},
	{
	  "quote": "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
	  "author": "Margaret Mead"
	},
	{
	  "quote": "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
	  "author": "Ovid"
	},
	{
	  "quote": "The person born with a talent they are meant to use will find their greatest happiness in using it.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.",
	  "author": "Remez Sasson"
	},
	{
	  "quote": "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
	  "author": "Epictetus"
	},
	{
	  "quote": "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
	  "author": "Sydney Smith"
	},
	{
	  "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
	  "author": "Frank Wright"
	},
	{
	  "quote": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
	  "author": "Charles DeLint"
	},
	{
	  "quote": "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
	  "author": "David Jordan"
	},
	{
	  "quote": "Make the best use of what is in your power, and take the rest as it happens.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.",
	  "author": "Vista Kelly"
	},
	{
	  "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
	  "author": "Rumi"
	},
	{
	  "quote": "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
	  "author": ""
	},
	{
	  "quote": "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
	  "author": "John Muir"
	},
	{
	  "quote": "I'm a great believer in luck and I find the harder I work, the more I have of it.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
	  "author": "David Jordan"
	},
	{
	  "quote": "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "No valid plans for the future can be made by those who have no capacity for living now.",
	  "author": "Alan Watts"
	},
	{
	  "quote": "The aim of life is self-development. To realize ones nature perfectly � that is what each of us is here for.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
	  "author": "Anatole France"
	},
	{
	  "quote": "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
	  "author": "John Steinbeck"
	},
	{
	  "quote": "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
	  "author": "James Freeman Clarke"
	},
	{
	  "quote": "If we are facing in the right direction, all we have to do is keep on walking.",
	  "author": ""
	},
	{
	  "quote": "The minute you settle for less than you deserve, you get even less than you settled for.",
	  "author": "Maureen Dowd"
	},
	{
	  "quote": "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "There is only one success � to be able to spend your life in your own way.",
	  "author": "Christopher Morley"
	},
	{
	  "quote": "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
	  "author": ""
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.",
	  "author": "Eknath Easwaran"
	},
	{
	  "quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
	  "author": ""
	},
	{
	  "quote": "If we are facing in the right direction, all we have to do is keep on walking.",
	  "author": ""
	},
	{
	  "quote": "We could never learn to be brave and patient if there were only joy in the world.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
	  "author": "Sai Baba"
	},
	{
	  "quote": "If it is not right do not do it; if it is not true do not say it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
	  "author": "Norman Schwarzkopf"
	},
	{
	  "quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
	  "author": "Charlotte Gilman"
	},
	{
	  "quote": "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
	  "author": "Julie Morgenstern"
	},
	{
	  "quote": "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Arrogance and rudeness are training wheels on the bicycle of life � for weak people who cannot keep their balance without them.",
	  "author": "Laura Teresa Marquez"
	},
	{
	  "quote": "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
	  "author": "Ralph Blum"
	},
	{
	  "quote": "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
	  "author": "Johannes Gaertner"
	},
	{
	  "quote": "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
	  "author": "Norman Schwarzkopf"
	},
	{
	  "quote": "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Arrogance and rudeness are training wheels on the bicycle of life � for weak people who cannot keep their balance without them.",
	  "author": "Laura Teresa Marquez"
	},
	{
	  "quote": "One must be fond of people and trust them if one is not to make a mess of life.",
	  "author": "E. M. Forster"
	},
	{
	  "quote": "The poor man is not he who is without a cent, but he who is without a dream.",
	  "author": "Harry Kemp"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "The greatest good you can do for another is not just share your riches, but reveal to them their own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
	  "author": "Buddha"
	},
	{
	  "quote": "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
	  "author": ""
	},
	{
	  "quote": "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
	  "author": "Everett Dirksen"
	},
	{
	  "quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
	  "author": "Confucius"
	},
	{
	  "quote": "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
	  "author": "Robert Louis Stevenson"
	},
	{
	  "quote": "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
	  "author": "John Kennedy"
	},
	{
	  "quote": "You have power over your mind � not outside events. Realize this, and you will find strength.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
	  "author": "Margaret Runbeck"
	},
	{
	  "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
	  "author": "Rumi"
	},
	{
	  "quote": "A good teacher is like a candle � it consumes itself to light the way for others.",
	  "author": ""
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
	  "author": "Robert Graves"
	},
	{
	  "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.",
	  "author": "Louis Pasteur"
	},
	{
	  "quote": "One secret of success in life is for a man to be ready for his opportunity when it comes.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
	  "author": "Buddha"
	},
	{
	  "quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
	  "author": "Henry Longfellow"
	},
	{
	  "quote": "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
	  "author": "Plato"
	},
	{
	  "quote": "I cannot always control what goes on outside. But I can always control what goes on inside.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
	  "author": "Margaret Cousins"
	},
	{
	  "quote": "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "We cannot change our memories, but we can change their meaning and the power they have over us.",
	  "author": "David Seamans"
	},
	{
	  "quote": "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
	  "author": "Rumi"
	},
	{
	  "quote": "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
	  "author": "Joan Didion"
	},
	{
	  "quote": "At the center of your being you have the answer; you know who you are and you know what you want.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "There is no retirement for an artist, it's your way of living so there is no end to it.",
	  "author": "Henry Moore"
	},
	{
	  "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
	  "author": ""
	},
	{
	  "quote": "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
	  "author": "John Muir"
	},
	{
	  "quote": "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
	  "author": "Alfred Tennyson"
	},
	{
	  "quote": "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
	  "author": "Leonardo Ruiz"
	},
	{
	  "quote": "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
	  "author": "Joan Didion"
	},
	{
	  "quote": "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Sadness may be part of life but there is no need to let it dominate your entire life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "Try not to become a man of success, but rather try to become a man of value.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "All difficult things have their origin in that which is easy, and great things in that which is small.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
	  "author": "Sophocles"
	},
	{
	  "quote": "We never understand how little we need in this world until we know the loss of it.",
	  "author": "James Barrie"
	},
	{
	  "quote": "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "It is not enough to have a good mind; the main thing is to use it well.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.",
	  "author": "Charles Schwab"
	},
	{
	  "quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Never do things others can do and will do, if there are things others cannot do or will not do.",
	  "author": "Amelia Earhart"
	},
	{
	  "quote": "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
	  "author": "Confucius"
	},
	{
	  "quote": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
	  "author": "Jimmy Dean"
	},
	{
	  "quote": "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
	  "author": "John Steinbeck"
	},
	{
	  "quote": "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
	  "author": "George Allen"
	},
	{
	  "quote": "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
	  "author": "Joseph Roux"
	},
	{
	  "quote": "I cannot always control what goes on outside. But I can always control what goes on inside.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
	  "author": "Bernice Reagon"
	},
	{
	  "quote": "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
	  "author": "Michael Jordan"
	},
	{
	  "quote": "Life is like a sewer. What you get out of it depends on what you put into it.",
	  "author": "Tom Lehrer"
	},
	{
	  "quote": "You can be what you want to be. You have the power within and we will help you always.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "If the stars should appear but one night every thousand years how man would marvel and adore.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The greatest way to live with honour in this world is to be what we pretend to be.",
	  "author": "Socrates"
	},
	{
	  "quote": "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.",
	  "author": "Henri Bergson"
	},
	{
	  "quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
	  "author": "William Penn"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "Try not to become a man of success but rather try to become a man of value.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
	  "author": "Rumi"
	},
	{
	  "quote": "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
	  "author": "Francois de La Rochefoucauld"
	},
	{
	  "quote": "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
	  "author": "Mabel Newcomber"
	},
	{
	  "quote": "Your work is to discover your world and then with all your heart give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "Arrogance and rudeness are training wheels on the bicycle of life � for weak people who cannot keep their balance without them.",
	  "author": "Laura Teresa Marquez"
	},
	{
	  "quote": "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "We cannot change our memories, but we can change their meaning and the power they have over us.",
	  "author": "David Seamans"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Don't turn away from possible futures before you're certain you don't have anything to learn from them.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
	  "author": "Julie Morgenstern"
	},
	{
	  "quote": "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.",
	  "author": "David Brinkley"
	},
	{
	  "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
	  "author": "Buddha"
	},
	{
	  "quote": "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
	  "author": "Henri-Frederic Amiel"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
	  "author": "Francois de La Rochefoucauld"
	},
	{
	  "quote": "How far that little candle throws its beams! So shines a good deed in a naughty world.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
	  "author": "John Quincy Adams"
	},
	{
	  "quote": "Fear is a darkroom where negatives develop.",
	  "author": "Usman Asif"
	},
	{
	  "quote": "It is in your moments of decision that your destiny is shaped.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Blaze with the fire that is never extinguished.",
	  "author": "Luisa Sigea"
	},
	{
	  "quote": "An obstacle may be either a stepping stone or a stumbling block.",
	  "author": ""
	},
	{
	  "quote": "The pain passes, but the beauty remains.",
	  "author": "Pierre Auguste Renoir"
	},
	{
	  "quote": "All I can say about life is, Oh God, enjoy it!",
	  "author": "Bob Newhart"
	},
	{
	  "quote": "Creativity comes from trust. Trust your instincts. And never hope more than you work.",
	  "author": "Rita Mae Brown"
	},
	{
	  "quote": "Love doesn't make the world go round, love is what makes the ride worthwhile.",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "Your outlook on life is a direct reflection on how much you like yourself.",
	  "author": "Lululemon"
	},
	{
	  "quote": "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "You won't skid if you stay in a rut.",
	  "author": "Kin Hubbard"
	},
	{
	  "quote": "You block your dream when you allow your fear to grow bigger than your faith.",
	  "author": "Mary Morrissey"
	},
	{
	  "quote": "Happiness depends upon ourselves.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Tension is who you think you should be. Relaxation is who you are.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Wherever a man turns he can find someone who needs him.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "If one is lucky, a solitary fantasy can totally transform one million realities.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Never idealize others. They will never live up to your expectations.",
	  "author": "Leo Buscaglia"
	},
	{
	  "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "He who is contented is rich.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "When you realize there is nothing lacking, the whole world belongs to you.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "No man was ever wise by chance.",
	  "author": "Seneca"
	},
	{
	  "quote": "The more you know yourself, the more you forgive yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "Trust yourself. You know more than you think you do.",
	  "author": "Benjamin Spock"
	},
	{
	  "quote": "Time you enjoy wasting, was not wasted.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Happiness is not something ready made. It comes from your own actions.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Meaning is not what you start with but what you end up with.",
	  "author": "Peter Elbow"
	},
	{
	  "quote": "No one has ever become poor by giving.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "Be faithful in small things because it is in them that your strength lies.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "What you do not want done to yourself, do not do to others.",
	  "author": "Confucius"
	},
	{
	  "quote": "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "All is flux; nothing stays still.",
	  "author": "Heraclitus"
	},
	{
	  "quote": "He who is fixed to a star does not change his mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the universe.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Ignorant men don't know what good they hold in their hands until they've flung it away.",
	  "author": "Sophocles"
	},
	{
	  "quote": "When the solution is simple, God is answering.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "All achievements, all earned riches, have their beginning in an idea.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Do not turn back when you are just at the goal.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "You can't trust without risk but neither can you live in a cocoon.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
	  "author": "Rudolf Arnheim"
	},
	{
	  "quote": "Error is discipline through which we advance.",
	  "author": "Channing"
	},
	{
	  "quote": "The truth is always exciting. Speak it, then. Life is dull without it.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "What worries you masters you.",
	  "author": "Haddon Robinson"
	},
	{
	  "quote": "The worst bankrupt in the world is the person who has lost his enthusiasm.",
	  "author": "H. W. Arnold"
	},
	{
	  "quote": "The superior man is modest in his speech, but exceeds in his actions.",
	  "author": "Confucius"
	},
	{
	  "quote": "The longer we dwell on our misfortunes, the greater is their power to harm us.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Those who will play with cats must expect to be scratched.",
	  "author": "Cervantes"
	},
	{
	  "quote": "I've never seen a smiling face that was not beautiful.",
	  "author": ""
	},
	{
	  "quote": "In all things of nature there is something of the marvellous.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Life isn't about finding yourself. Life is about creating yourself.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "The universe is transformation; our life is what our thoughts make it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Memory is the mother of all wisdom.",
	  "author": "Samuel Johnson"
	},
	{
	  "quote": "Silence is the true friend that never betrays.",
	  "author": "Confucius"
	},
	{
	  "quote": "You might well remember that nothing can bring you success but yourself.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Watch the little things; a small leak will sink a great ship.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "God has given you one face, and you make yourself another.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
	  "author": "Rudolf Arnheim"
	},
	{
	  "quote": "The more you know yourself, the more you forgive yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "Efficiency is doing things right; effectiveness is doing the right things.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "To be wronged is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Kindness is the greatest wisdom.",
	  "author": ""
	},
	{
	  "quote": "Action will remove the doubts that theory cannot solve.",
	  "author": "Tehyi Hsieh"
	},
	{
	  "quote": "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
	  "author": ""
	},
	{
	  "quote": "Your big opportunity may be right where you are now.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Kindness is the greatest wisdom.",
	  "author": ""
	},
	{
	  "quote": "People who say it cannot be done should not interrupt those who are doing it.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "The day you decide to do it is your lucky day.",
	  "author": "Japanese proverb"
	},
	{
	  "quote": "We must not say every mistake is a foolish one.",
	  "author": "Cicero"
	},
	{
	  "quote": "Imagination is the highest kite one can fly.",
	  "author": "Lauren Bacall"
	},
	{
	  "quote": "Every action of our lives touches on some chord that will vibrate in eternity.",
	  "author": "Edwin Chapin"
	},
	{
	  "quote": "Accept challenges, so that you may feel the exhilaration of victory.",
	  "author": "George Patton"
	},
	{
	  "quote": "It is better to understand a little than to misunderstand a lot.",
	  "author": "Anatole France"
	},
	{
	  "quote": "You don't drown by falling in water. You drown by staying there.",
	  "author": ""
	},
	{
	  "quote": "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
	  "author": ""
	},
	{
	  "quote": "Correction does much, but encouragement does more.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Know, first, who you are, and then adorn yourself accordingly.",
	  "author": "Epictetus"
	},
	{
	  "quote": "The biggest adventure you can ever take is to live the life of your dreams.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "The pain passes, but the beauty remains.",
	  "author": "Pierre Auguste Renoir"
	},
	{
	  "quote": "The cause is hidden. The effect is visible to all.",
	  "author": "Ovid"
	},
	{
	  "quote": "You will not be punished for your anger, you will be punished by your anger.",
	  "author": "Buddha"
	},
	{
	  "quote": "Time you enjoy wasting, was not wasted.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Happiness is not something ready made. It comes from your own actions.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
	  "author": ""
	},
	{
	  "quote": "Life is 10% what happens to you and 90% how you react to it.",
	  "author": "Charles Swindoll"
	},
	{
	  "quote": "We all have problems. The way we solve them is what makes us different.",
	  "author": ""
	},
	{
	  "quote": "An obstacle may be either a stepping stone or a stumbling block.",
	  "author": ""
	},
	{
	  "quote": "To want to be what one can be is purpose in life.",
	  "author": "Cynthia Ozick"
	},
	{
	  "quote": "The future belongs to those who believe in the beauty of their dreams.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Truth is powerful and it prevails.",
	  "author": "Sojourner Truth"
	},
	{
	  "quote": "History will be kind to me for I intend to write it.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Short words are best and the old words when short are best of all.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Our lives are a sum total of the choices we have made.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Time stays long enough for anyone who will use it.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Each day provides its own gifts.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "If you light a lamp for somebody, it will also brighten your path.",
	  "author": "Buddha"
	},
	{
	  "quote": "Never tell me the sky�s the limit when there are footprints on the moon.",
	  "author": ""
	},
	{
	  "quote": "You must welcome change as the rule but not as your ruler.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Give whatever you are doing and whoever you are with the gift of your attention.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "Always be smarter than the people who hire you.",
	  "author": "Lena Horne"
	},
	{
	  "quote": "We do what we do because we believe.",
	  "author": ""
	},
	{
	  "quote": "Formula for success: under promise and over deliver.",
	  "author": "Tom Peters"
	},
	{
	  "quote": "The eye sees only what the mind is prepared to comprehend.",
	  "author": "Henri Bergson"
	},
	{
	  "quote": "You can't stop the waves, but you can learn to surf.",
	  "author": "Jon Kabat-Zinn"
	},
	{
	  "quote": "Some people think it's holding that makes one strong � sometimes it's letting go.",
	  "author": ""
	},
	{
	  "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "People seldom notice old clothes if you wear a big smile.",
	  "author": "Lee Mildon"
	},
	{
	  "quote": "The more light you allow within you, the brighter the world you live in will be.",
	  "author": "Shakti Gawain"
	},
	{
	  "quote": "Nothing diminishes anxiety faster than action.",
	  "author": "Walter Anderson"
	},
	{
	  "quote": "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding about ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Never mistake activity for achievement.",
	  "author": "John Wooden"
	},
	{
	  "quote": "Fortune favours the brave.",
	  "author": "Virgil"
	},
	{
	  "quote": "Can you imagine what I would do if I could do all I can?",
	  "author": "Sun Tzu"
	},
	{
	  "quote": "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Practice yourself, for heavens sake in little things, and then proceed to greater.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Ignorance never settle a question.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "The awareness of our own strength makes us modest.",
	  "author": "Paul Cezanne"
	},
	{
	  "quote": "The journey of a thousand miles begins with one step.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "They must often change, who would be constant in happiness or wisdom.",
	  "author": "Confucius"
	},
	{
	  "quote": "There are no failures. Just experiences and your reactions to them.",
	  "author": "Tom Krause"
	},
	{
	  "quote": "Your future depends on many things, but mostly on you.",
	  "author": "Frank Tyger"
	},
	{
	  "quote": "Fear grows in darkness; if you think theres a bogeyman around, turn on the light.",
	  "author": "Dorothy Thompson"
	},
	{
	  "quote": "If you surrender to the wind, you can ride it.",
	  "author": "Toni Morrison"
	},
	{
	  "quote": "The most important point is to accept yourself and stand on your two feet.",
	  "author": "Shunryu Suzuki"
	},
	{
	  "quote": "It is better to understand a little than to misunderstand a lot.",
	  "author": "Anatole France"
	},
	{
	  "quote": "If we did the things we are capable of, we would astound ourselves.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
	  "author": "Tomas Eliot"
	},
	{
	  "quote": "More often than not, anger is actually an indication of weakness rather than of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "We must not say every mistake is a foolish one.",
	  "author": "Cicero"
	},
	{
	  "quote": "The superior man is modest in his speech, but exceeds in his actions.",
	  "author": "Confucius"
	},
	{
	  "quote": "As long as your going to be thinking anyway, think big.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "Without some goals and some efforts to reach it, no man can live.",
	  "author": "John Dewey"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Richard Braunstein"
	},
	{
	  "quote": "Wherever a man turns he can find someone who needs him.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "If the shoe doesn't fit, must we change the foot?",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "Love all, trust a few, do wrong to none.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Those who will play with cats must expect to be scratched.",
	  "author": "Cervantes"
	},
	{
	  "quote": "You have to do your own growing no matter how tall your grandfather was.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "To be upset over what you don't have is to waste what you do have.",
	  "author": "Ken S. Keyes"
	},
	{
	  "quote": "The foot feels the foot when it feels the ground.",
	  "author": "Buddha"
	},
	{
	  "quote": "Not what we have but what we enjoy constitutes our abundance.",
	  "author": "John Petit-Senn"
	},
	{
	  "quote": "We should all be thankful for those people who rekindle the inner spirit.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Opportunity is missed by most because it is dressed in overalls and looks like work.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Successful people ask better questions, and as a result, they get better answers.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "It is never too late to be what you might have been.",
	  "author": "George Eliot"
	},
	{
	  "quote": "The beginning is always today.",
	  "author": "Mary Wollstonecraft"
	},
	{
	  "quote": "Sadness flies away on the wings of time.",
	  "author": "Jean de la Fontaine"
	},
	{
	  "quote": "In the long run we get no more than we have been willing to risk giving.",
	  "author": "Sheldon Kopp"
	},
	{
	  "quote": "Self-trust is the first secret of success.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Without some goals and some efforts to reach it, no man can live.",
	  "author": "John Dewey"
	},
	{
	  "quote": "So long as a person is capable of self-renewal they are a living being.",
	  "author": "Henri-Frederic Amiel"
	},
	{
	  "quote": "Don't look back. Something might be gaining on you.",
	  "author": "Satchel Paige"
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "They must often change, who would be constant in happiness or wisdom.",
	  "author": "Confucius"
	},
	{
	  "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
	  "author": "Alfred Sheinwold"
	},
	{
	  "quote": "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
	  "author": "Ralph Blum"
	},
	{
	  "quote": "The greatest way to live with honour in this world is to be what we pretend to be.",
	  "author": "Socrates"
	},
	{
	  "quote": "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
	  "author": "Marcel Proust"
	},
	{
	  "quote": "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
	  "author": ""
	},
	{
	  "quote": "If it is not right do not do it; if it is not true do not say it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
	  "author": "George Bernard Shaw"
	},
	{
	  "quote": "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
	  "author": "Margaret Mead"
	},
	{
	  "quote": "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Men are disturbed not by things, but by the view which they take of them.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
	  "author": "Confucius"
	},
	{
	  "quote": "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
	  "author": "George Allen"
	},
	{
	  "quote": "Happiness is a Swedish sunset � it is there for all, but most of us look the other way and lose it.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "A smile is a light in the window of your face to show your heart is at home.",
	  "author": ""
	},
	{
	  "quote": "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Your work is to discover your world and then with all your heart give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
	  "author": "William Ward"
	},
	{
	  "quote": "Look forward to spring as a time when you can start to see what nature has to offer once again.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.",
	  "author": "Billy Wilder"
	},
	{
	  "quote": "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "I am always doing that which I can not do, in order that I may learn how to do it.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "You are always free to change your mind and choose a different future, or a different past.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
	  "author": "Chalmers"
	},
	{
	  "quote": "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
	  "author": "Niccolo Machiavelli"
	},
	{
	  "quote": "You may only be someone in the world, but to someone else, you may be the world.",
	  "author": ""
	},
	{
	  "quote": "The real measure of your wealth is how much youd be worth if you lost all your money.",
	  "author": ""
	},
	{
	  "quote": "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
	  "author": "Henry Ward Beecher"
	},
	{
	  "quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
	  "author": "Buddha"
	},
	{
	  "quote": "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
	  "author": "Joseph Roux"
	},
	{
	  "quote": "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
	  "author": "Sydney Smith"
	},
	{
	  "quote": "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.",
	  "author": "James Faust"
	},
	{
	  "quote": "There is only one corner of the universe you can be certain of improving, and that's your own self.",
	  "author": "Aldous Huxley"
	},
	{
	  "quote": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
	  "author": "Buddha"
	},
	{
	  "quote": "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
	  "author": "Tryon Edwards"
	},
	{
	  "quote": "At the center of your being you have the answer; you know who you are and you know what you want.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
	  "author": "John Astin"
	},
	{
	  "quote": "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
	  "author": "M. Scott Peck"
	},
	{
	  "quote": "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
	  "author": "Hasidic saying"
	},
	{
	  "quote": "When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.",
	  "author": "Joseph Campbell"
	},
	{
	  "quote": "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
	  "author": "Ralph Blum"
	},
	{
	  "quote": "I cannot always control what goes on outside. But I can always control what goes on inside.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
	  "author": "Dhammapada"
	},
	{
	  "quote": "The world is round and the place which may seem like the end may also be the beginning.",
	  "author": "Ivy Baker Priest"
	},
	{
	  "quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
	  "author": "Tryon Edwards"
	},
	{
	  "quote": "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
	  "author": "Bernice Reagon"
	},
	{
	  "quote": "There is one thing you have got to learn about our movement. Three people are better than no people.",
	  "author": "Fannie Hamer"
	},
	{
	  "quote": "We never understand how little we need in this world until we know the loss of it.",
	  "author": "James Barrie"
	},
	{
	  "quote": "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.",
	  "author": "Remez Sasson"
	},
	{
	  "quote": "I'm a great believer in luck and I find the harder I work, the more I have of it.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
	  "author": "Aristotle"
	},
	{
	  "quote": "It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes.",
	  "author": "Byron Roberts"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "The amount of happiness that you have depends on the amount of freedom you have in your heart.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
	  "author": "Buddha"
	},
	{
	  "quote": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
	  "author": "Buddha"
	},
	{
	  "quote": "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
	  "author": "Dhammapada"
	},
	{
	  "quote": "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
	  "author": "George Sheehan"
	},
	{
	  "quote": "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
	  "author": "Louis Pasteur"
	},
	{
	  "quote": "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.",
	  "author": "Babatunde Olatunji"
	},
	{
	  "quote": "Make the best use of what is in your power, and take the rest as it happens.",
	  "author": "Epictetus"
	},
	{
	  "quote": "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
	  "author": "Julie Morgenstern"
	},
	{
	  "quote": "Every man takes the limits of his own field of vision for the limits of the world.",
	  "author": "Arthur Schopenhauer"
	},
	{
	  "quote": "Sometimes it is better to lose and do the right thing than to win and do the wrong thing.",
	  "author": "Tony Blair"
	},
	{
	  "quote": "If we are facing in the right direction, all we have to do is keep on walking.",
	  "author": ""
	},
	{
	  "quote": "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Let us always meet each other with smile, for the smile is the beginning of love.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "A bend in the road is not the end of the road...unless you fail to make the turn.",
	  "author": ""
	},
	{
	  "quote": "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
	  "author": "G. K. Chesterton"
	},
	{
	  "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
	  "author": ""
	},
	{
	  "quote": "Living at risk is jumping off the cliff and building your wings on the way down.",
	  "author": "Ray Bradbury"
	},
	{
	  "quote": "The person born with a talent they are meant to use will find their greatest happiness in using it.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "In the depth of winter, I finally learned that there was within me an invincible summer.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.",
	  "author": "Madame de Stael"
	},
	{
	  "quote": "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
	  "author": "Plato"
	},
	{
	  "quote": "A failure is a man who has blundered but is not capable of cashing in on the experience.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
	  "author": "Herbert Swope"
	},
	{
	  "quote": "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
	  "author": ""
	},
	{
	  "quote": "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "The power of intuitive understanding will protect you from harm until the end of your days.",
	  "author": "Laozi"
	},
	{
	  "quote": "The best thing about the future is that it only comes one day at a time.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "A smile is a light in the window of your face to show your heart is at home.",
	  "author": ""
	},
	{
	  "quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	  "author": "Laurence J. Peter"
	},
	{
	  "quote": "We have two ears and one mouth so that we can listen twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Fear of failure is one attitude that will keep you at the same point in your life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Sadness may be part of life but there is no need to let it dominate your entire life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Friends are those rare people who ask how we are and then wait to hear the answer.",
	  "author": "Ed Cunningham"
	},
	{
	  "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "I'm a great believer in luck and I find the harder I work, the more I have of it.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
	  "author": "Jimmy Dean"
	},
	{
	  "quote": "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
	  "author": "Hasidic saying"
	},
	{
	  "quote": "People grow through experience if they meet life honestly and courageously. This is how character is built.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "While we try to teach our children all about life, our children teach us what life is all about.",
	  "author": "Angela Schwindt"
	},
	{
	  "quote": "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
	  "author": "Buddha"
	},
	{
	  "quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
	  "author": ""
	},
	{
	  "quote": "All difficult things have their origin in that which is easy, and great things in that which is small.",
	  "author": "Lao-Tzu"
	},
	{
	  "quote": "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
	  "author": "Leonardo Ruiz"
	},
	{
	  "quote": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
	  "author": "Charles Darwin"
	},
	{
	  "quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	  "author": ""
	},
	{
	  "quote": "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
	  "author": ""
	},
	{
	  "quote": "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
	  "author": "Charles DeLint"
	},
	{
	  "quote": "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
	  "author": "Robert Graves"
	},
	{
	  "quote": "All difficult things have their origin in that which is easy, and great things in that which is small.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The Creator has not given you a longing to do that which you have no ability to do.",
	  "author": "Orison Marden"
	},
	{
	  "quote": "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
	  "author": "Sam Levenson"
	},
	{
	  "quote": "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
	  "author": "Buddha"
	},
	{
	  "quote": "Until you make peace with who you are, you will never be content with what you have.",
	  "author": "Doris Mortman"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
	  "author": "Mabel Newcomber"
	},
	{
	  "quote": "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
	  "author": "Sydney Smith"
	},
	{
	  "quote": "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
	  "author": "Buddha"
	},
	{
	  "quote": "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
	  "author": "Buddha"
	},
	{
	  "quote": "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
	  "author": "Henry Miller"
	},
	{
	  "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "If we are facing in the right direction, all we have to do is keep on walking.",
	  "author": ""
	},
	{
	  "quote": "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "The greatest antidote to insecurity and the sense of fear is compassion � it brings one back to the basis of one's inner strength",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Courage is the discovery that you may not win, and trying when you know you can lose.",
	  "author": ""
	},
	{
	  "quote": "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "No valid plans for the future can be made by those who have no capacity for living now.",
	  "author": "Alan Watts"
	},
	{
	  "quote": "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
	  "author": "Mortimer Adler"
	},
	{
	  "quote": "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
	  "author": "Niccolo Machiavelli"
	},
	{
	  "quote": "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
	  "author": "Buddha"
	},
	{
	  "quote": "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
	  "author": "Ralph Blum"
	},
	{
	  "quote": "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.",
	  "author": "Leo Aikman"
	},
	{
	  "quote": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
	  "author": "Charles Darwin"
	},
	{
	  "quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
	  "author": "Buddha"
	},
	{
	  "quote": "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "It is surprising what a man can do when he has to, and how little most men will do when they don't have to.",
	  "author": "Walter Linn"
	},
	{
	  "quote": "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
	  "author": "Tenzin Gyatso"
	},
	{
	  "quote": "Nobody made a greater mistake than he who did nothing because he could do only a little.",
	  "author": "Edmund Burke"
	},
	{
	  "quote": "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.",
	  "author": "Leo Aikman"
	},
	{
	  "quote": "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	  "author": "Laurence J. Peter"
	},
	{
	  "quote": "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
	  "author": "Herbert Swope"
	},
	{
	  "quote": "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Experience is not what happens to a man. It is what a man does with what happens to him.",
	  "author": "Aldous Huxley"
	},
	{
	  "quote": "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "A man should look for what is, and not for what he thinks should be.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
	  "author": "John Wooden"
	},
	{
	  "quote": "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
	  "author": "William Channing"
	},
	{
	  "quote": "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
	  "author": "Robert Fulghum"
	},
	{
	  "quote": "If you have no respect for your own values how can you be worthy of respect from others.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "One must be fond of people and trust them if one is not to make a mess of life.",
	  "author": "E. M. Forster"
	},
	{
	  "quote": "The real measure of your wealth is how much youd be worth if you lost all your money.",
	  "author": ""
	},
	{
	  "quote": "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.",
	  "author": "Alphonse Karr"
	},
	{
	  "quote": "You are always free to change your mind and choose a different future, or a different past.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "To choose what is difficult all ones days, as if it were easy, that is faith.",
	  "author": "W. H. Auden"
	},
	{
	  "quote": "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
	  "author": "Henri-Frederic Amiel"
	},
	{
	  "quote": "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
	  "author": "George Allen"
	},
	{
	  "quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
	  "author": "John Astin"
	},
	{
	  "quote": "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
	  "author": "Henry Longfellow"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
	  "author": "George Bernard Shaw"
	},
	{
	  "quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing.",
	  "author": "Michel de Montaigne"
	},
	{
	  "quote": "Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.",
	  "author": "Margaret Laurence"
	},
	{
	  "quote": "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
	  "author": "Ajahn Chah"
	},
	{
	  "quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.",
	  "author": "Vincent Lombardi"
	},
	{
	  "quote": "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
	  "author": "Elisabeth Kubler-Ross"
	},
	{
	  "quote": "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
	  "author": "Confucius"
	},
	{
	  "quote": "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.",
	  "author": "Anne Lindbergh"
	},
	{
	  "quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.",
	  "author": "Nathaniel Hawthorne"
	},
	{
	  "quote": "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
	  "author": "Buddha"
	},
	{
	  "quote": "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
	  "author": "Buddha"
	},
	{
	  "quote": "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.",
	  "author": "Caroline Myss"
	},
	{
	  "quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.",
	  "author": "William James"
	},
	{
	  "quote": "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "The secret of joy in work is contained in one word � excellence. To know how to do something well is to enjoy it.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
	  "author": "Confucius"
	},
	{
	  "quote": "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.",
	  "author": "Nathaniel Hawthorne"
	},
	{
	  "quote": "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.",
	  "author": "Uta Hagen"
	},
	{
	  "quote": "Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them.",
	  "author": "Orison Marden"
	},
	{
	  "quote": "Everything can be taken from a man but ... the last of the human freedoms � to choose ones attitude in any given set of circumstances, to choose ones own way.",
	  "author": "Victor Frankl"
	},
	{
	  "quote": "It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.",
	  "author": "Edward de Bono"
	},
	{
	  "quote": "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.",
	  "author": "Amy Tan"
	},
	{
	  "quote": "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
	  "author": "Epictetus"
	},
	{
	  "quote": "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
	  "author": "Stephen Covey"
	},
	{
	  "quote": "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
	  "author": "Paul Graham"
	},
	{
	  "quote": "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.",
	  "author": "Chuck Norris"
	},
	{
	  "quote": "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
	  "author": "Amiel"
	},
	{
	  "quote": "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.",
	  "author": "Amy Bloom"
	},
	{
	  "quote": "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
	  "author": "Keshavan Nair"
	},
	{
	  "quote": "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
	  "author": "Margaret Smith"
	},
	{
	  "quote": "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
	  "author": "Frederick Douglass"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "When you arise in the morning, think of what a precious privilege it is to be alive � to breathe, to think, to enjoy, to love.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "You must train your intuition � you must trust the small voice inside you which tells you exactly what to say, what to decide.",
	  "author": "Ingrid Bergman"
	},
	{
	  "quote": "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
	  "author": "Ajahn Chah"
	},
	{
	  "quote": "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.",
	  "author": "John Kennedy"
	},
	{
	  "quote": "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.",
	  "author": "William James"
	},
	{
	  "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.",
	  "author": "John Kennedy"
	},
	{
	  "quote": "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
	  "author": "Confucius"
	},
	{
	  "quote": "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
	  "author": "Robert Fulghum"
	},
	{
	  "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate � that's my philosophy.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
	  "author": "John Dewey"
	},
	{
	  "quote": "He who conquers others is strong; He who conquers himself is mighty.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Nothing diminishes anxiety faster than action.",
	  "author": "Walter Anderson"
	},
	{
	  "quote": "The secret of success is constancy to purpose.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Anything you really want, you can attain, if you really go after it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Arriving at one point is the starting point to another.",
	  "author": "John Dewey"
	},
	{
	  "quote": "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
	  "author": "James Oppenheim"
	},
	{
	  "quote": "Don't be afraid to go out on a limb. That's where the fruit is.",
	  "author": "H. Jackson Browne"
	},
	{
	  "quote": "When the solution is simple, God is answering.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Never put off till tomorrow what you can do today.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
	  "author": "Tomas Eliot"
	},
	{
	  "quote": "The greatest part of our happiness depends on our dispositions, not our circumstances.",
	  "author": "Martha Washington"
	},
	{
	  "quote": "It is in your moments of decision that your destiny is shaped.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "It is only possible to live happily ever after on a day to day basis.",
	  "author": "Margaret Bonnano"
	},
	{
	  "quote": "Being right is highly overrated. Even a stopped clock is right twice a day.",
	  "author": ""
	},
	{
	  "quote": "Love doesn't make the world go round, love is what makes the ride worthwhile.",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "One fails forward toward success.",
	  "author": "Charles Kettering"
	},
	{
	  "quote": "A man sees in the world what he carries in his heart.",
	  "author": "Goethe"
	},
	{
	  "quote": "If you surrender to the wind, you can ride it.",
	  "author": "Toni Morrison"
	},
	{
	  "quote": "Action may not always bring happiness, but there is no happiness without action.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Love is the flower you've got to let grow.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Believe deep down in your heart that you're destined to do great things.",
	  "author": "Joe Paterno"
	},
	{
	  "quote": "Sooner or later, those who win are those who think they can.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The only limit to your impact is your imagination and commitment.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Silence is the true friend that never betrays.",
	  "author": "Confucius"
	},
	{
	  "quote": "You are special, you are unique, you are the best!",
	  "author": "Cathy Pulsifer"
	},
	{
	  "quote": "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
	  "author": "William Arthur Ward"
	},
	{
	  "quote": "It is in your moments of decision that your destiny is shaped.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Life is a learning experience, only if you learn.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "A short saying oft contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "I'm not afraid of storms, for Im learning how to sail my ship.",
	  "author": "Louisa Alcott"
	},
	{
	  "quote": "To know oneself is to study oneself in action with another person.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "We must not allow ourselves to become like the system we oppose.",
	  "author": "Bishop Desmond Tutu"
	},
	{
	  "quote": "Smile, breathe and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "The day you decide to do it is your lucky day.",
	  "author": "Japanese proverb"
	},
	{
	  "quote": "To want to be what one can be is purpose in life.",
	  "author": "Cynthia Ozick"
	},
	{
	  "quote": "Reality is merely an illusion, albeit a very persistent one.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "When you come to the end of your rope, tie a knot and hang on.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "Always be mindful of the kindness and not the faults of others.",
	  "author": "Buddha"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding of ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "When fate hands us a lemon, lets try to make lemonade.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "A man is great by deeds, not by birth.",
	  "author": "Chanakya"
	},
	{
	  "quote": "Success is getting what you want. Happiness is wanting what you get.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Put your future in good hands � your own.",
	  "author": ""
	},
	{
	  "quote": "Don't be pushed by your problems; be led by your dreams.",
	  "author": ""
	},
	{
	  "quote": "You are important enough to ask and you are blessed enough to receive back.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Truth isn't all about what actually happens but more about how what has happened is interpreted.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The cautious seldom err.",
	  "author": "Confucius"
	},
	{
	  "quote": "No garden is without its weeds.",
	  "author": "Thomas Fuller"
	},
	{
	  "quote": "Who looks outside, dreams; who looks inside, awakes.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "A good rest is half the work.",
	  "author": ""
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "Small opportunities are often the beginning of great enterprises.",
	  "author": "Demosthenes"
	},
	{
	  "quote": "You can do what's reasonable or you can decide what's possible.",
	  "author": ""
	},
	{
	  "quote": "To be tested is good. The challenged life may be the best therapist.",
	  "author": "Gail Sheehy"
	},
	{
	  "quote": "If you think you can, you can. And if you think you can't, you're right.",
	  "author": "Henry Ford"
	},
	{
	  "quote": "There are no failures. Just experiences and your reactions to them.",
	  "author": "Tom Krause"
	},
	{
	  "quote": "I destroy my enemies when I make them my friends.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Do something wonderful, people may imitate it.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Fears are nothing more than a state of mind.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Take heed: you do not find what you do not seek.",
	  "author": "English proverb"
	},
	{
	  "quote": "Happiness is the reward we get for living to the highest right we know.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Be slow of tongue and quick of eye.",
	  "author": "Cervantes"
	},
	{
	  "quote": "Freedom is not worth having if it does not connote freedom to err.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Nothing diminishes anxiety faster than action.",
	  "author": "Walter Anderson"
	},
	{
	  "quote": "I have always thought the actions of men the best interpreters of their thoughts.",
	  "author": "John Locke"
	},
	{
	  "quote": "If one is lucky, a solitary fantasy can totally transform one million realities.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "I'm not afraid of storms, for Im learning how to sail my ship.",
	  "author": "Louisa Alcott"
	},
	{
	  "quote": "Be great in act, as you have been in thought.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "The cause is hidden. The effect is visible to all.",
	  "author": "Ovid"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Richard Braunstein"
	},
	{
	  "quote": "To dare is to lose ones footing momentarily. To not dare is to lose oneself.",
	  "author": "Soren Kierkegaard"
	},
	{
	  "quote": "No day in which you learn something is a complete loss.",
	  "author": "David Eddings"
	},
	{
	  "quote": "When the solution is simple, God is answering.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Peace cannot be kept by force. It can only be achieved by understanding.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Real success is finding your lifework in the work that you love.",
	  "author": "David McCullough"
	},
	{
	  "quote": "Better than a thousand hollow words, is one word that brings peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "All the flowers of all the tomorrows are in the seeds of today.",
	  "author": ""
	},
	{
	  "quote": "Some pursue happiness, others create it.",
	  "author": ""
	},
	{
	  "quote": "Your sacred space is where you can find yourself again and again.",
	  "author": "Joseph Campbell"
	},
	{
	  "quote": "There never was a good knife made of bad steel.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "He who talks more is sooner exhausted.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "As you think, so shall you become.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Do not turn back when you are just at the goal.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Richard Braunstein"
	},
	{
	  "quote": "In seed time learn, in harvest teach, in winter enjoy.",
	  "author": "William Blake"
	},
	{
	  "quote": "A short saying oft contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Happiness does not come from having much, but from being attached to little.",
	  "author": "Cheng Yen"
	},
	{
	  "quote": "Every gift from a friend is a wish for your happiness.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Go put your creed into the deed. Nor speak with double tongue.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "In the end we retain from our studies only that which we practically apply.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "The wisest men follow their own direction.",
	  "author": "Euripides"
	},
	{
	  "quote": "Hope arouses, as nothing else can arouse, a passion for the possible.",
	  "author": "William Sloane Coffin"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "Who sows virtue reaps honour.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "The future belongs to those who believe in the beauty of their dreams.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Everything has beauty, but not everyone sees it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Courage is going from failure to failure without losing enthusiasm.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "He who talks more is sooner exhausted.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Nothing ever goes away until it has taught us what we need to know.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
	  "author": "Buddha"
	},
	{
	  "quote": "Small opportunities are often the beginning of great enterprises.",
	  "author": "Demosthenes"
	},
	{
	  "quote": "If you don't know where you are going, you will probably end up somewhere else.",
	  "author": "Lawrence Peter"
	},
	{
	  "quote": "When you learn, teach. When you get, give.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "We choose our destiny in the way we treat others.",
	  "author": "Wit"
	},
	{
	  "quote": "The universe is transformation; our life is what our thoughts make it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Difficulties increase the nearer we get to the goal.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Science is organized knowledge. Wisdom is organized life.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "Only when we are no longer afraid do we begin to live.",
	  "author": "Dorothy Thompson"
	},
	{
	  "quote": "If you smile when no one else is around, you really mean it.",
	  "author": "Andy Rooney"
	},
	{
	  "quote": "Life is a process. We are a process. The universe is a process.",
	  "author": "Anne Schaef"
	},
	{
	  "quote": "Love is the only force capable of transforming an enemy into friend.",
	  "author": "Martin Luther King, Jr."
	},
	{
	  "quote": "Good luck is another name for tenacity of purpose.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Well done is better than well said.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Our lives are a sum total of the choices we have made.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "In all chaos there is a cosmos, in all disorder a secret order.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "A man is not where he lives but where he loves.",
	  "author": ""
	},
	{
	  "quote": "You can do what's reasonable or you can decide what's possible.",
	  "author": ""
	},
	{
	  "quote": "The greatest remedy for anger is delay.",
	  "author": "Seneca"
	},
	{
	  "quote": "The price of greatness is responsibility.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Decision is a risk rooted in the courage of being free.",
	  "author": "Paul Tillich"
	},
	{
	  "quote": "The day is already blessed, find peace within it.",
	  "author": ""
	},
	{
	  "quote": "You might well remember that nothing can bring you success but yourself.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Your mind will answer most questions if you learn to relax and wait for the answer.",
	  "author": "William Burroughs"
	},
	{
	  "quote": "All things change; nothing perishes.",
	  "author": "Ovid"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "God has given you one face, and you make yourself another.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Being right is highly overrated. Even a stopped clock is right twice a day.",
	  "author": ""
	},
	{
	  "quote": "The world doesn�t happen to you it happens from you.",
	  "author": ""
	},
	{
	  "quote": "It is only possible to live happily ever after on a day to day basis.",
	  "author": "Margaret Bonnano"
	},
	{
	  "quote": "We cannot solve our problems with the same thinking we used when we created them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "More powerful than the will to win is the courage to begin.",
	  "author": ""
	},
	{
	  "quote": "Wisdom is the supreme part of happiness.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Who looks outside, dreams; who looks inside, awakes.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Learning is finding out what you already know.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "We learn what we have said from those who listen to our speaking.",
	  "author": "Kenneth Patton"
	},
	{
	  "quote": "Efficiency is doing things right; effectiveness is doing the right things.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "Saying thank you is more than good manners. It is good spirituality.",
	  "author": "Alfred Painter"
	},
	{
	  "quote": "Silence is a source of great strength.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Joy is the best makeup.",
	  "author": "Anne Lamott"
	},
	{
	  "quote": "If you cannot be silent be brilliant and thoughtful.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "There is no great genius without some touch of madness.",
	  "author": "Seneca"
	},
	{
	  "quote": "The biggest adventure you can ever take is to live the life of your dreams.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "A jug fills drop by drop.",
	  "author": "Buddha"
	},
	{
	  "quote": "You must welcome change as the rule but not as your ruler.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding of ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Once you choose hope, anythings possible.",
	  "author": "Christopher Reeve"
	},
	{
	  "quote": "Talk doesn't cook rice.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
	  "author": "Buddha"
	},
	{
	  "quote": "The only real valuable thing is intuition.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Accept challenges, so that you may feel the exhilaration of victory.",
	  "author": "George Patton"
	},
	{
	  "quote": "Until you make peace with who you are, you'll never be content with what you have.",
	  "author": "Doris Mortman"
	},
	{
	  "quote": "Never apologize for showing feelings. When you do so, you apologize for the truth.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "We aim above the mark to hit the mark.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Being angry never solves anything.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "Every problem has a gift for you in its hands.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "All men who have achieved great things have been great dreamers.",
	  "author": "Orison Marden"
	},
	{
	  "quote": "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "Where all think alike, no one thinks very much.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "Everything that exists is in a manner the seed of that which will be.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Be less curious about people and more curious about ideas.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "The heart has eyes which the brain knows nothing of.",
	  "author": "Charles Perkhurst"
	},
	{
	  "quote": "Don't be pushed by your problems; be led by your dreams.",
	  "author": ""
	},
	{
	  "quote": "I'm not afraid of storms, for Im learning how to sail my ship.",
	  "author": "Louisa Alcott"
	},
	{
	  "quote": "A short saying oft contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Everything is perfect in the universe � even your desire to improve it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Think how hard physics would be if particles could think.",
	  "author": "Murray Gell-Mann"
	},
	{
	  "quote": "Only those who dare to fail greatly can ever achieve greatly.",
	  "author": "Robert Kennedy"
	},
	{
	  "quote": "Lose an hour in the morning, and you will spend all day looking for it.",
	  "author": "Richard Whately"
	},
	{
	  "quote": "Mistakes are always forgivable, if one has the courage to admit them.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Go to your bosom: Knock there, and ask your heart what it doth know.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "If you think you can, you can. And if you think you can't, you're right.",
	  "author": "Henry Ford"
	},
	{
	  "quote": "Through perseverance many people win success out of what seemed destined to be certain failure.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Happiness mainly comes from our own attitude, rather than from external factors.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "If you do not change direction, you may end up where you are heading.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "What we see is mainly what we look for.",
	  "author": ""
	},
	{
	  "quote": "If you correct your mind, the rest of your life will fall into place.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Stay away from what might have been and look at what will be.",
	  "author": "Marsha Petrie Sue"
	},
	{
	  "quote": "When the solution is simple, God is answering.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Act as if what you do makes a difference. It does.",
	  "author": "William James"
	},
	{
	  "quote": "Successful people ask better questions, and as a result, they get better answers.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "There never was a good knife made of bad steel.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Better be ignorant of a matter than half know it.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Passion creates the desire for more and action fuelled by passion creates a future.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Most people are about as happy as they make up their minds to be",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Every new day is another chance to change your life.",
	  "author": ""
	},
	{
	  "quote": "Do good by stealth, and blush to find it fame.",
	  "author": "Alexander Pope"
	},
	{
	  "quote": "When you doubt your power, you give power to your doubt.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "I always wanted to be somebody, but I should have been more specific.",
	  "author": "Lily Tomlin"
	},
	{
	  "quote": "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Pick battles big enough to matter, small enough to win.",
	  "author": "Jonathan Kozol"
	},
	{
	  "quote": "If we did the things we are capable of, we would astound ourselves.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Don't talk about what you have done or what you are going to do.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "The way is not in the sky. The way is in the heart.",
	  "author": "Buddha"
	},
	{
	  "quote": "Most powerful is he who has himself in his own power.",
	  "author": "Seneca"
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "We don't stop playing because we grow old; we grow old because we stop playing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "It is not so important to know everything as to appreciate what we learn.",
	  "author": "Hannah More"
	},
	{
	  "quote": "Experience can only be gained by doing not by thinking or dreaming.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Always tell the truth. That way, you don't have to remember what you said.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "From wonder into wonder existence opens.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "An ant on the move does more than a dozing ox",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "To avoid criticism, do nothing, say nothing, be nothing.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "Through perseverance many people win success out of what seemed destined to be certain failure.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "He who fears being conquered is sure of defeat.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Life is what happens while you are making other plans.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Good luck is another name for tenacity of purpose.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Doing what you love is the cornerstone of having abundance in your life.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Nothing diminishes anxiety faster than action.",
	  "author": "Walter Anderson"
	},
	{
	  "quote": "Be faithful in small things because it is in them that your strength lies.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Kindness is the golden chain by which society is bound together.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "You need chaos in your soul to give birth to a dancing star.",
	  "author": "Nietzsche"
	},
	{
	  "quote": "I have often regretted my speech, never my silence.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "It can't be spring if your heart is filled with past failures.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "If you cannot be silent be brilliant and thoughtful.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "If you wish to be a writer, write.",
	  "author": "Epictetus"
	},
	{
	  "quote": "No yesterdays are ever wasted for those who give themselves to today.",
	  "author": "Brendan Francis"
	},
	{
	  "quote": "The truth is always exciting. Speak it, then. Life is dull without it.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "There are no failures � just experiences and your reactions to them.",
	  "author": "Tom Krause"
	},
	{
	  "quote": "Action is the foundational key to all success.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "What is necessary to change a person is to change his awareness of himself.",
	  "author": "Abraham Maslow"
	},
	{
	  "quote": "Silence is a fence around wisdom.",
	  "author": "German proverb"
	},
	{
	  "quote": "If you spend too much time thinking about a thing, you'll never get it done.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Positive thinking will let you do everything better than negative thinking will.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "Think how hard physics would be if particles could think.",
	  "author": "Murray Gell-Mann"
	},
	{
	  "quote": "We shall never know all the good that a simple smile can do.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Nature takes away any faculty that is not used.",
	  "author": "William R. Inge"
	},
	{
	  "quote": "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
	  "author": "Frances de Sales"
	},
	{
	  "quote": "Fears are nothing more than a state of mind.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Imagination is not a talent of some men but is the health of every man.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "We must embrace pain and burn it as fuel for our journey.",
	  "author": "Kenji Miyazawa"
	},
	{
	  "quote": "It has never been my object to record my dreams, just to realize them.",
	  "author": "Man Ray"
	},
	{
	  "quote": "Don't wait for people to be friendly. Show them how.",
	  "author": ""
	},
	{
	  "quote": "Practice yourself, for heavens sake in little things, and then proceed to greater.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Your outlook on life is a direct reflection on how much you like yourself.",
	  "author": "Lululemon"
	},
	{
	  "quote": "Better to have loved and lost, than to have never loved at all.",
	  "author": "St. Augustine"
	},
	{
	  "quote": "A man is not where he lives but where he loves.",
	  "author": ""
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Three things cannot be long hidden: the sun, the moon, and the truth.",
	  "author": "Buddha"
	},
	{
	  "quote": "Every day may not be good, but there's something good in every day.",
	  "author": ""
	},
	{
	  "quote": "Well begun is half done.",
	  "author": "Aristotle"
	},
	{
	  "quote": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
	  "author": "Buddha"
	},
	{
	  "quote": "Do one thing every day that scares you.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Whatever happens, take responsibility.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "A gem cannot be polished without friction, nor a man perfected without trials.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "No is easier to do. Yes is easier to say.",
	  "author": "Jason Fried"
	},
	{
	  "quote": "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
	  "author": "Frances de Sales"
	},
	{
	  "quote": "Life is a process. We are a process. The universe is a process.",
	  "author": "Anne Schaef"
	},
	{
	  "quote": "Don't wait. The time will never be just right.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Be as you wish to seem.",
	  "author": "Socrates"
	},
	{
	  "quote": "Knowing is not enough; we must apply!",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Science is organized knowledge. Wisdom is organized life.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "The path to success is to take massive, determined action.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Freedom is not worth having if it does not connote freedom to err.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Each day can be one of triumph if you keep up your interests.",
	  "author": "George Matthew Adams"
	},
	{
	  "quote": "The place to improve the world is first in one's own heart and head and hands.",
	  "author": "Robert M. Pirsig"
	},
	{
	  "quote": "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Winners have simply formed the habit of doing things losers don't like to do.",
	  "author": "Albert Gray"
	},
	{
	  "quote": "Nature is a mutable cloud which is always and never the same.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Life is what you make of it. Always has been, always will be.",
	  "author": "Grandma Moses"
	},
	{
	  "quote": "If you do not change direction, you may end up where you are heading.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Worry often gives a small thing a big shadow.",
	  "author": "Swedish proverb"
	},
	{
	  "quote": "I want you to be everything that's you, deep at the center of your being.",
	  "author": "Confucius"
	},
	{
	  "quote": "We know what we are, but know not what we may be.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Do not turn back when you are just at the goal.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Freedom is what you do with what's been done to you.",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "Life is so constructed that an event does not, cannot, will not, match the expectation.",
	  "author": "Charlotte Bronte"
	},
	{
	  "quote": "Pick battles big enough to matter, small enough to win.",
	  "author": "Jonathan Kozol"
	},
	{
	  "quote": "It is never too late to be what you might have been.",
	  "author": "George Eliot"
	},
	{
	  "quote": "The truth which has made us free will in the end make us glad also.",
	  "author": "Felix Adler"
	},
	{
	  "quote": "The heart has its reasons which reason knows not of.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "To succeed, we must first believe that we can.",
	  "author": "Michael Korda"
	},
	{
	  "quote": "He who has imagination without learning has wings but no feet.",
	  "author": "Joseph Joubert"
	},
	{
	  "quote": "Never ignore a gut feeling, but never believe that it's enough.",
	  "author": "Robert Heller"
	},
	{
	  "quote": "Everything in life is luck.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "A goal without a plan is just a wish.",
	  "author": "Larry Elder"
	},
	{
	  "quote": "Our lives are a sum total of the choices we have made.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Watch the little things; a small leak will sink a great ship.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "When performance exceeds ambition, the overlap is called success.",
	  "author": "Cullen Hightower"
	},
	{
	  "quote": "Work out your own salvation. Do not depend on others.",
	  "author": "Buddha"
	},
	{
	  "quote": "Everyone smiles in the same language.",
	  "author": ""
	},
	{
	  "quote": "We do what we do because we believe.",
	  "author": ""
	},
	{
	  "quote": "Whoso loves, believes the impossible.",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "Fate is in your hands and no one elses",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "Reality is merely an illusion, albeit a very persistent one.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
	  "author": "Buddha"
	},
	{
	  "quote": "The greatest obstacle to connecting with our joy is resentment.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Freedom is what you do with what's been done to you.",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "Mountains cannot be surmounted except by winding paths.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "When anger use your energy to do something productive.",
	  "author": "C. Pulsifer"
	},
	{
	  "quote": "Growth itself contains the germ of happiness.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "Victory belongs to the most persevering.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "We are all something, but none of us are everything.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "To want to be what one can be is purpose in life.",
	  "author": "Cynthia Ozick"
	},
	{
	  "quote": "Intuition will tell the thinking mind where to look next.",
	  "author": "Jonas Salk"
	},
	{
	  "quote": "Always be mindful of the kindness and not the faults of others.",
	  "author": "Buddha"
	},
	{
	  "quote": "No yesterdays are ever wasted for those who give themselves to today.",
	  "author": "Brendan Francis"
	},
	{
	  "quote": "Do not turn back when you are just at the goal.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
	  "author": "Confucius"
	},
	{
	  "quote": "Where all think alike, no one thinks very much.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "Action is the foundational key to all success.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "If you can't explain it simply, you don't understand it well enough.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The truth which has made us free will in the end make us glad also.",
	  "author": "Felix Adler"
	},
	{
	  "quote": "Sooner or later, those who win are those who think they can.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the world.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Begin at once to live and count each separate day as a separate life.",
	  "author": "Seneca"
	},
	{
	  "quote": "He who knows himself is enlightened.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Growth itself contains the germ of happiness.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "Kind words do not cost much. Yet they accomplish much.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Think as a wise man but communicate in the language of the people.",
	  "author": "William Yeats"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the universe.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Kind words will unlock an iron door.",
	  "author": "Turkish proverb"
	},
	{
	  "quote": "Build a better mousetrap and the world will beat a path to your door.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "As our case is new, we must think and act anew.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Fear is a darkroom where negatives develop.",
	  "author": "Usman Asif"
	},
	{
	  "quote": "Every action of our lives touches on some chord that will vibrate in eternity.",
	  "author": "Edwin Chapin"
	},
	{
	  "quote": "If you can't feed a hundred people, then feed just one.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "When anger use your energy to do something productive.",
	  "author": "C. Pulsifer"
	},
	{
	  "quote": "In three words I can sum up everything Ive learned about life: it goes on.",
	  "author": "Robert Frost"
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "The day you decide to do it is your lucky day.",
	  "author": "Japanese proverb"
	},
	{
	  "quote": "Happiness is not something ready made. It comes from your own actions.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
	  "author": ""
	},
	{
	  "quote": "Silence is a true friend who never betrays.",
	  "author": "Confucius"
	},
	{
	  "quote": "As our case is new, we must think and act anew.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Great talent finds happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Keep yourself to the sunshine and you cannot see the shadow.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Who sows virtue reaps honour.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "If you don't know where you are going, you will probably end up somewhere else.",
	  "author": "Lawrence Peter"
	},
	{
	  "quote": "Goals are the fuel in the furnace of achievement.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "To be wronged is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "You always succeed in producing a result.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Everything you are against weakens you. Everything you are for empowers you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "As we risk ourselves, we grow. Each new experience is a risk.",
	  "author": "Fran Watson"
	},
	{
	  "quote": "What we achieve inwardly will change outer reality.",
	  "author": "Plutarch"
	},
	{
	  "quote": "Who we are never changes. Who we think we are does.",
	  "author": "Mary Almanac"
	},
	{
	  "quote": "If you correct your mind, the rest of your life will fall into place.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Feeling and longing are the motive forces behind all human endeavor and human creations.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The final proof of greatness lies in being able to endure criticism without resentment.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "If you do not change direction, you may end up where you are heading.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "An obstacle may be either a stepping stone or a stumbling block.",
	  "author": ""
	},
	{
	  "quote": "A beautiful thing is never perfect.",
	  "author": ""
	},
	{
	  "quote": "A man sees in the world what he carries in his heart.",
	  "author": "Goethe"
	},
	{
	  "quote": "An invasion of armies can be resisted, but not an idea whose time has come.",
	  "author": "Victor Hugo"
	},
	{
	  "quote": "Never let lack of money interfere with having fun.",
	  "author": ""
	},
	{
	  "quote": "Excellence is not a skill. It is an attitude.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "People may doubt what you say, but they will believe what you do.",
	  "author": "Lewis Cass"
	},
	{
	  "quote": "The most formidable weapon against errors of every kind is reason.",
	  "author": "Thomas Paine"
	},
	{
	  "quote": "If there is no struggle, there is no progress.",
	  "author": "Frederick Douglass"
	},
	{
	  "quote": "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
	  "author": "Danilo Dolci"
	},
	{
	  "quote": "No one can make you feel inferior without your consent.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "When you come to the end of your rope, tie a knot and hang on.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "Sooner or later, those who win are those who think they can.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Beware of missing chances; otherwise it may be altogether too late some day.",
	  "author": "Franz Liszt"
	},
	{
	  "quote": "You only lose what you cling to.",
	  "author": "Buddha"
	},
	{
	  "quote": "Life is a succession of moments. To live each one is to succeed.",
	  "author": "Corita Kent"
	},
	{
	  "quote": "Most of the shadows of life are caused by standing in our own sunshine.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "Good actions give strength to ourselves and inspire good actions in others.",
	  "author": "Plato"
	},
	{
	  "quote": "I know but one freedom and that is the freedom of the mind.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "Freedom is not worth having if it does not connote freedom to err.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "In the middle of every difficulty lies opportunity.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Trust yourself. You know more than you think you do.",
	  "author": "Benjamin Spock"
	},
	{
	  "quote": "If one does not know to which port is sailing, no wind is favorable.",
	  "author": "Seneca"
	},
	{
	  "quote": "Wherever you go, go with all your heart.",
	  "author": "Confucius"
	},
	{
	  "quote": "Every human being is the author of his own health or disease.",
	  "author": "Buddha"
	},
	{
	  "quote": "When in doubt, tell the truth.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "To be wronged is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
	  "author": "J. Willard Marriott"
	},
	{
	  "quote": "Every great advance in science has issued from a new audacity of the imagination.",
	  "author": "John Dewey"
	},
	{
	  "quote": "The path to success is to take massive, determined action.",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "The ladder of success is never crowded at the top.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Formula for success: under promise and over deliver.",
	  "author": "Tom Peters"
	},
	{
	  "quote": "What you fear is that which requires action to overcome.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Worry often gives a small thing a big shadow.",
	  "author": "Swedish proverb"
	},
	{
	  "quote": "He who has health has hope, and he who has hope has everything.",
	  "author": ""
	},
	{
	  "quote": "All great achievements require time.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "The heart has eyes which the brain knows nothing of.",
	  "author": "Charles Perkhurst"
	},
	{
	  "quote": "No person is your friend who demands your silence, or denies your right to grow.",
	  "author": "Alice Walker"
	},
	{
	  "quote": "A really great talent finds its happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Impossibilities are merely things which we have not yet learned.",
	  "author": "Charles Chesnutt"
	},
	{
	  "quote": "Vision without action is a daydream. Action without vision is a nightmare.",
	  "author": "Japanese proverb"
	},
	{
	  "quote": "Love all, trust a few, do wrong to none.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
	  "author": ""
	},
	{
	  "quote": "Today is the tomorrow you worried about yesterday.",
	  "author": ""
	},
	{
	  "quote": "Without faith, nothing is possible. With it, nothing is impossible.",
	  "author": "Mary Bethune"
	},
	{
	  "quote": "Your outlook on life is a direct reflection on how much you like yourself.",
	  "author": "Lululemon"
	},
	{
	  "quote": "To be wrong is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Happiness is not something ready made. It comes from your own actions.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Life is like riding a bicycle. To keep your balance you must keep moving.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
	  "author": "Confucius"
	},
	{
	  "quote": "A rolling stone gathers no moss.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Trust yourself. You know more than you think you do.",
	  "author": "Benjamin Spock"
	},
	{
	  "quote": "He who angers you conquers you.",
	  "author": "Elizabeth Kenny"
	},
	{
	  "quote": "I never worry about action, but only inaction.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "The world makes way for the man who knows where he is going.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "No man is free who is not master of himself.",
	  "author": "Epictetus"
	},
	{
	  "quote": "He who conquers others is strong; He who conquers himself is mighty.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The truest wisdom is a resolute determination.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Those that know, do. Those that understand, teach.",
	  "author": "Aristotle"
	},
	{
	  "quote": "If we are not fully ourselves, truly in the present moment, we miss everything.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "A thing long expected takes the form of the unexpected when at last it comes.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Do good by stealth, and blush to find it fame.",
	  "author": "Alexander Pope"
	},
	{
	  "quote": "An ant on the move does more than a dozing ox",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "No act of kindness, no matter how small, is ever wasted.",
	  "author": "Aesop"
	},
	{
	  "quote": "Every man is a volume if you know how to read him.",
	  "author": "Channing"
	},
	{
	  "quote": "The difficulties of life are intended to make us better, not bitter.",
	  "author": ""
	},
	{
	  "quote": "A good rest is half the work.",
	  "author": ""
	},
	{
	  "quote": "We choose our destiny in the way we treat others.",
	  "author": "Wit"
	},
	{
	  "quote": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
	  "author": "Buddha"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding about ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Better be ignorant of a matter than half know it.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "You can't stop the waves, but you can learn to surf.",
	  "author": "Jon Kabat-Zinn"
	},
	{
	  "quote": "Quality means doing it right when no one is looking.",
	  "author": "Henry Ford"
	},
	{
	  "quote": "The cautious seldom err.",
	  "author": "Confucius"
	},
	{
	  "quote": "Change your words. Change your world.",
	  "author": ""
	},
	{
	  "quote": "Worry often gives a small thing a big shadow.",
	  "author": "Swedish proverb"
	},
	{
	  "quote": "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "The superior man is modest in his speech, but exceeds in his actions.",
	  "author": "Confucius"
	},
	{
	  "quote": "All is flux; nothing stays still.",
	  "author": "Heraclitus"
	},
	{
	  "quote": "To get something you never had, you have to do something you never did.",
	  "author": ""
	},
	{
	  "quote": "I know but one freedom and that is the freedom of the mind.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "Every day may not be good, but there's something good in every day.",
	  "author": ""
	},
	{
	  "quote": "A short saying often contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Great acts are made up of small deeds.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The foot feels the foot when it feels the ground.",
	  "author": "Buddha"
	},
	{
	  "quote": "The odds of hitting your target go up dramatically when you aim at it.",
	  "author": "Mal Pancoast"
	},
	{
	  "quote": "It is in your moments of decision that your destiny is shaped.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "The superior man is satisfied and composed; the mean man is always full of distress.",
	  "author": "Confucius"
	},
	{
	  "quote": "Open minds lead to open doors.",
	  "author": ""
	},
	{
	  "quote": "They can do all because they think they can.",
	  "author": "Virgil"
	},
	{
	  "quote": "Life is the flower for which love is the honey.",
	  "author": "Victor Hugo"
	},
	{
	  "quote": "The secret of success is constancy to purpose.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Courage is going from failure to failure without losing enthusiasm.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "The secret of success is constancy to purpose.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "You have to think anyway, so why not think big?",
	  "author": "Donald Trump"
	},
	{
	  "quote": "The world is a book, and those who do not travel read only a page.",
	  "author": "Augustinus Sanctus"
	},
	{
	  "quote": "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
	  "author": "Edward Young"
	},
	{
	  "quote": "Smile, breathe and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "If one does not know to which port is sailing, no wind is favorable.",
	  "author": "Seneca"
	},
	{
	  "quote": "It is better to understand a little than to misunderstand a lot.",
	  "author": "Anatole France"
	},
	{
	  "quote": "Once you choose hope, anythings possible.",
	  "author": "Christopher Reeve"
	},
	{
	  "quote": "Until you make peace with who you are, you'll never be content with what you have.",
	  "author": "Doris Mortman"
	},
	{
	  "quote": "To enjoy life, we must touch much of it lightly.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Nothing strengthens authority so much as silence.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Most folks are about as happy as they make up their minds to be.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
	  "author": "James Oppenheim"
	},
	{
	  "quote": "Your body is precious. It is our vehicle for awakening. Treat it with care.",
	  "author": "Buddha"
	},
	{
	  "quote": "You can do what's reasonable or you can decide what's possible.",
	  "author": ""
	},
	{
	  "quote": "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
	  "author": "Frances de Sales"
	},
	{
	  "quote": "Practice yourself, for heavens sake in little things, and then proceed to greater.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Nobody will believe in you unless you believe in yourself.",
	  "author": "Liberace"
	},
	{
	  "quote": "The one who always loses, is the only person who gets the reward.",
	  "author": "Claire Charmont"
	},
	{
	  "quote": "Better be ignorant of a matter than half know it.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Character develops itself in the stream of life.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "All the flowers of all the tomorrows are in the seeds of today.",
	  "author": ""
	},
	{
	  "quote": "Self-complacency is fatal to progress.",
	  "author": "Margaret Sangster"
	},
	{
	  "quote": "Our intention creates our reality.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "From wonder into wonder existence opens.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Happiness is found in doing, not merely possessing.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "They say that time changes things, but you actually have to change them yourself.",
	  "author": "Andy Warhol"
	},
	{
	  "quote": "The future is completely open, and we are writing it moment to moment.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "I cannot make my days longer so I strive to make them better.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "No is easier to do. Yes is easier to say.",
	  "author": "Jason Fried"
	},
	{
	  "quote": "Nothing happens unless first we dream.",
	  "author": "Carl Sandburg"
	},
	{
	  "quote": "I believe that we are fundamentally the same and have the same basic potential.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Successful people ask better questions, and as a result, they get better answers.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Happiness comes when your work and words are of benefit to yourself and others.",
	  "author": "Buddha"
	},
	{
	  "quote": "There is no way to prosperity, prosperity is the way.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "I know but one freedom and that is the freedom of the mind.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
	  "author": ""
	},
	{
	  "quote": "Ask yourself the secret of your success. Listen to your answer, and practice it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Better to have loved and lost, than to have never loved at all.",
	  "author": "St. Augustine"
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "No man can succeed in a line of endeavor which he does not like.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Don't frown because you never know who is falling in love with your smile.",
	  "author": "Sinvyest Tan"
	},
	{
	  "quote": "Experience is simply the name we give our mistakes.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Better be ignorant of a matter than half know it.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
	  "author": "Joyce Brothers"
	},
	{
	  "quote": "The place to improve the world is first in one's own heart and head and hands.",
	  "author": "Robert M. Pirsig"
	},
	{
	  "quote": "Nothing is at last sacred but the integrity of your own mind.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Listen to your intuition. It will tell you everything you need to know.",
	  "author": "Anthony D'Angelo"
	},
	{
	  "quote": "To bring anything into your life, imagine that it's already there.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Light tomorrow with today!",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "The personal life deeply lived always expands into truths beyond itself.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Everything is perfect in the universe � even your desire to improve it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The undertaking of a new action brings new strength.",
	  "author": "Richard Evans"
	},
	{
	  "quote": "Whenever something negative happens to you, there is a deep lesson concealed within it.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "The most complicated achievements of thought are possible without the assistance of consciousness.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "Being angry never solves anything.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "Fortune favours the brave.",
	  "author": "Virgil"
	},
	{
	  "quote": "What is not started today is never finished tomorrow.",
	  "author": "Goethe"
	},
	{
	  "quote": "I think somehow we learn who we really are and then live with that decision.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Light tomorrow with today!",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "You can't stop the waves, but you can learn to surf.",
	  "author": "Jon Kabat-Zinn"
	},
	{
	  "quote": "Nothing ever goes away until it has taught us what we need to know.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Fate is in your hands and no one elses",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The ladder of success is never crowded at the top.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Our kindness may be the most persuasive argument for that which we believe.",
	  "author": "Gordon Hinckley"
	},
	{
	  "quote": "It's easier to see the mistakes on someone else's paper.",
	  "author": ""
	},
	{
	  "quote": "Chaos is inherent in all compounded things. Strive on with diligence.",
	  "author": "Buddha"
	},
	{
	  "quote": "Be sure you put your feet in the right place, then stand firm.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding of ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "By believing passionately in something that does not yet exist, we create it.",
	  "author": "Nikos Kazantzakis"
	},
	{
	  "quote": "They must often change, who would be constant in happiness or wisdom.",
	  "author": "Confucius"
	},
	{
	  "quote": "The heart has eyes which the brain knows nothing of.",
	  "author": "Charles Perkhurst"
	},
	{
	  "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Nothing great was ever achieved without enthusiasm.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "God always takes the simplest way.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "We all have problems. The way we solve them is what makes us different.",
	  "author": ""
	},
	{
	  "quote": "Real magic in relationships means an absence of judgement of others.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "All serious daring starts from within.",
	  "author": "Harriet Beecher Stowe"
	},
	{
	  "quote": "They can do all because they think they can.",
	  "author": "Virgil"
	},
	{
	  "quote": "Act as if what you do makes a difference. It does.",
	  "author": "William James"
	},
	{
	  "quote": "The journey of a thousand miles begins with one step.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Know how to listen, and you will profit even from those who talk badly.",
	  "author": "Plutarch"
	},
	{
	  "quote": "It is never too late to be what you might have been.",
	  "author": "George Eliot"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Richard Braunstein"
	},
	{
	  "quote": "A man is not old as long as he is seeking something.",
	  "author": "Edmond Rostand"
	},
	{
	  "quote": "Ideas are the beginning points of all fortunes.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "The time you think you're missing, misses you too.",
	  "author": "Ymber Delecto"
	},
	{
	  "quote": "No man was ever wise by chance.",
	  "author": "Seneca"
	},
	{
	  "quote": "You won't skid if you stay in a rut.",
	  "author": "Kin Hubbard"
	},
	{
	  "quote": "We don't stop playing because we grow old; we grow old because we stop playing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Give thanks for the rain of life that propels us to reach new horizons.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Patience is the companion of wisdom.",
	  "author": "Saint Augustine"
	},
	{
	  "quote": "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
	  "author": "James Oppenheim"
	},
	{
	  "quote": "Our kindness may be the most persuasive argument for that which we believe.",
	  "author": "Gordon Hinckley"
	},
	{
	  "quote": "Life is not measured by the breaths you take, but by its breathtaking moments.",
	  "author": "Michael Vance"
	},
	{
	  "quote": "Much wisdom often goes with fewer words.",
	  "author": "Sophocles"
	},
	{
	  "quote": "If you love life, don't waste time, for time is what life is made up of.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "He who talks more is sooner exhausted.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The greatest way to live with honour in this world is to be what we pretend to be.",
	  "author": "Socrates"
	},
	{
	  "quote": "Imagination is the living power and prime agent of all human perception.",
	  "author": "Samuel Taylor Coleridge"
	},
	{
	  "quote": "I'm not afraid of storms, for Im learning how to sail my ship.",
	  "author": "Louisa Alcott"
	},
	{
	  "quote": "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "Victory belongs to the most persevering.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
	  "author": "Buddha"
	},
	{
	  "quote": "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "What lies behind us and what lies before us are small matters compared to what lies within us.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "Be slow of tongue and quick of eye.",
	  "author": "Cervantes"
	},
	{
	  "quote": "It is impossible to feel grateful and depressed in the same moment.",
	  "author": "Naomi Williams"
	},
	{
	  "quote": "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
	  "author": ""
	},
	{
	  "quote": "The path to success is to take massive, determined action.",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
	  "author": "Walt Emerson"
	},
	{
	  "quote": "Progress always involves risks. You can't steal second base and keep your foot on first.",
	  "author": "Frederick Wilcox"
	},
	{
	  "quote": "Peace comes from within. Do not seek it without.",
	  "author": "Buddha"
	},
	{
	  "quote": "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
	  "author": "Simone Weil"
	},
	{
	  "quote": "Blaze with the fire that is never extinguished.",
	  "author": "Luisa Sigea"
	},
	{
	  "quote": "There are no failures � just experiences and your reactions to them.",
	  "author": "Tom Krause"
	},
	{
	  "quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
	  "author": "Tryon Edwards"
	},
	{
	  "quote": "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
	  "author": "Edward Young"
	},
	{
	  "quote": "If you would take, you must first give, this is the beginning of intelligence.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "A thing well said will be wit in all languages.",
	  "author": "John Dryden"
	},
	{
	  "quote": "Write your plans in pencil and give God the eraser.",
	  "author": "Paulo Coelho"
	},
	{
	  "quote": "No is easier to do. Yes is easier to say.",
	  "author": "Jason Fried"
	},
	{
	  "quote": "Always do your best. What you plant now, you will harvest later.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "My mama always said: life's like a box of chocolate � you never know what you gonna get.",
	  "author": "Forrest Gump"
	},
	{
	  "quote": "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "If you light a lamp for somebody, it will also brighten your path.",
	  "author": "Buddha"
	},
	{
	  "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "If you come to a fork in the road, take it.",
	  "author": ""
	},
	{
	  "quote": "Life is 10% what happens to you and 90% how you react to it.",
	  "author": "Charles Swindoll"
	},
	{
	  "quote": "Error is discipline through which we advance.",
	  "author": "Channing"
	},
	{
	  "quote": "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
	  "author": "Niels Bohr"
	},
	{
	  "quote": "Be slow of tongue and quick of eye.",
	  "author": "Cervantes"
	},
	{
	  "quote": "He who conquers others is strong; He who conquers himself is mighty.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The best way to pay for a lovely moment is to enjoy it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "If we are facing in the right direction, all we have to do is keep on walking.",
	  "author": ""
	},
	{
	  "quote": "It is not only for what we do that we are held responsible, but also for what we do not do.",
	  "author": "Moliere"
	},
	{
	  "quote": "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "As the rest of the world is walking out the door, your best friends are the ones walking in.",
	  "author": ""
	},
	{
	  "quote": "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "Someone is special only if you tell them.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
	  "author": "Sam Levenson"
	},
	{
	  "quote": "A man is great by deeds, not by birth.",
	  "author": "Chanakya"
	},
	{
	  "quote": "No garden is without its weeds.",
	  "author": "Thomas Fuller"
	},
	{
	  "quote": "Nobody can do everything, but everybody can do something.",
	  "author": ""
	},
	{
	  "quote": "The world has the habit of making room for the man whose actions show that he knows where he is going.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Quality is never an accident; it is always the result of intelligent effort.",
	  "author": "John Ruskin"
	},
	{
	  "quote": "You cannot step twice into the same river, for other waters are continually flowing in.",
	  "author": "Heraclitus"
	},
	{
	  "quote": "We should all be thankful for those people who rekindle the inner spirit.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
	  "author": "Leonardo Ruiz"
	},
	{
	  "quote": "All great achievements require time.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Never idealize others. They will never live up to your expectations.",
	  "author": "Leo Buscaglia"
	},
	{
	  "quote": "Excellence is to do a common thing in an uncommon way.",
	  "author": "Booker Washington"
	},
	{
	  "quote": "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "No matter how hard the past, you can always begin again.",
	  "author": "Buddha"
	},
	{
	  "quote": "I begin with an idea and then it becomes something else.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "May our hearts garden of awakening bloom with hundreds of flowers.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Friends are those rare people who ask how we are and then wait to hear the answer.",
	  "author": "Ed Cunningham"
	},
	{
	  "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Whoever is happy will make others happy, too.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
	  "author": "Mortimer Adler"
	},
	{
	  "quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
	  "author": "Henry Longfellow"
	},
	{
	  "quote": "The bird of paradise alights only upon the hand that does not grasp.",
	  "author": "John Berry"
	},
	{
	  "quote": "Difficulties increase the nearer we get to the goal.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Act as if what you do makes a difference. It does.",
	  "author": "William James"
	},
	{
	  "quote": "To accomplish great things, we must dream as well as act.",
	  "author": "Anatole France"
	},
	{
	  "quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "Your work is to discover your work and then with all your heart to give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
	  "author": "Buddha"
	},
	{
	  "quote": "It's not what happens to you, but how you react to it that matters.",
	  "author": "Epictetus"
	},
	{
	  "quote": "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
	  "author": "Jessamyn West"
	},
	{
	  "quote": "Take it easy � but take it.",
	  "author": "Woody Guthrie"
	},
	{
	  "quote": "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
	  "author": "Barbara Baron"
	},
	{
	  "quote": "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
	  "author": "Robert Louis Stevenson"
	},
	{
	  "quote": "Whoever is happy will make others happy, too.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Never apologize for showing feeling. When you do so, you apologize for truth.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Where all think alike, no one thinks very much.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
	  "author": "Sai Baba"
	},
	{
	  "quote": "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "I have done my best: that is about all the philosophy of living one needs.",
	  "author": "Lin-yutang"
	},
	{
	  "quote": "To accomplish great things, we must dream as well as act.",
	  "author": "Anatole France"
	},
	{
	  "quote": "The beginning is always today.",
	  "author": "Mary Wollstonecraft"
	},
	{
	  "quote": "Keep true to the dreams of thy youth.",
	  "author": "Friedrich von Schiller"
	},
	{
	  "quote": "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
	  "author": "Buddha"
	},
	{
	  "quote": "The winds and waves are always on the side of the ablest navigators.",
	  "author": "Edward Gibbon"
	},
	{
	  "quote": "Take rest; a field that has rested gives a bountiful crop.",
	  "author": "Ovid"
	},
	{
	  "quote": "Truth isn't all about what actually happens but more about how what has happened is interpreted.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Age does not protect you from love. But love, to some extent, protects you from age.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Men are disturbed not by things, but by the view which they take of them.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
	  "author": "Charlotte Gilman"
	},
	{
	  "quote": "Every man takes the limits of his own field of vision for the limits of the world.",
	  "author": "Arthur Schopenhauer"
	},
	{
	  "quote": "Doing what you love is the cornerstone of having abundance in your life.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "May our hearts garden of awakening bloom with hundreds of flowers.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Do what you can. Want what you have. Be who you are.",
	  "author": "Forrest Church"
	},
	{
	  "quote": "There are people who have money and people who are rich.",
	  "author": "Coco Chanel"
	},
	{
	  "quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
	  "author": "Henry Longfellow"
	},
	{
	  "quote": "The greatest good you can do for another is not just share your riches, but reveal to them their own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Why worry about tomorrow, when today is all we have?",
	  "author": ""
	},
	{
	  "quote": "Speak when you are angry and you will make the best speech you will ever regret.",
	  "author": "Ambrose Bierce"
	},
	{
	  "quote": "To accomplish great things, we must dream as well as act.",
	  "author": "Anatole France"
	},
	{
	  "quote": "Things do not change, we change.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "The exercise of an extraordinary gift is the supremest pleasure in life.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
	  "author": "Etty Hillesum"
	},
	{
	  "quote": "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "To be wronged is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "We should all be thankful for those people who rekindle the inner spirit.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "There is no greater harm than that of time wasted.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "Forgiveness is choosing to love. It is the first skill of self-giving love.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "To accomplish great things, we must dream as well as act.",
	  "author": "Anatole France"
	},
	{
	  "quote": "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
	  "author": "William Londen"
	},
	{
	  "quote": "Believe deep down in your heart that you're destined to do great things.",
	  "author": "Joe Paterno"
	},
	{
	  "quote": "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
	  "author": "Frances de Sales"
	},
	{
	  "quote": "If you cannot do great things, do small things in a great way.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Experience is simply the name we give our mistakes.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Most smiles are started by another smile.",
	  "author": ""
	},
	{
	  "quote": "Think how hard physics would be if particles could think.",
	  "author": "Murray Gell-Mann"
	},
	{
	  "quote": "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Imagination is the highest kite one can fly.",
	  "author": "Lauren Bacall"
	},
	{
	  "quote": "The best way out is always through.",
	  "author": "Robert Frost"
	},
	{
	  "quote": "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Nothing is softer or more flexible than water, yet nothing can resist it.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The exercise of an extraordinary gift is the supremest pleasure in life.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.",
	  "author": "Henri Bergson"
	},
	{
	  "quote": "A man is not where he lives but where he loves.",
	  "author": ""
	},
	{
	  "quote": "Experience keeps a dear school, but fools will learn in no other.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "The heart has eyes which the brain knows nothing of.",
	  "author": "Charles Perkhurst"
	},
	{
	  "quote": "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "Fine words and an insinuating appearance are seldom associated with true virtue",
	  "author": "Confucius"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "Someone remembers, someone cares; your name is whispered in someone's prayers.",
	  "author": ""
	},
	{
	  "quote": "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
	  "author": "Mabel Newcomber"
	},
	{
	  "quote": "God always takes the simplest way.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
	  "author": "Henry Ward Beecher"
	},
	{
	  "quote": "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
	  "author": ""
	},
	{
	  "quote": "Those that know, do. Those that understand, teach.",
	  "author": "Aristotle"
	},
	{
	  "quote": "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
	  "author": "Seneca"
	},
	{
	  "quote": "You can be what you want to be. You have the power within and we will help you always.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "He who knows himself is enlightened.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The universe is transformation; our life is what our thoughts make it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Our kindness may be the most persuasive argument for that which we believe.",
	  "author": "Gordon Hinckley"
	},
	{
	  "quote": "We do not quit playing because we grow old, we grow old because we quit playing.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "You can't choose up sides on a round world.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "What you do not want done to yourself, do not do to others.",
	  "author": "Confucius"
	},
	{
	  "quote": "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Fortune favours the brave.",
	  "author": "Virgil"
	},
	{
	  "quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "A man is not old as long as he is seeking something.",
	  "author": "Edmond Rostand"
	},
	{
	  "quote": "Happiness depends upon ourselves.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Smile, breathe and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "A man is not old as long as he is seeking something.",
	  "author": "Edmond Rostand"
	},
	{
	  "quote": "Imagination is the living power and prime agent of all human perception.",
	  "author": "Samuel Taylor Coleridge"
	},
	{
	  "quote": "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate � that's my philosophy.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
	  "author": "Rumi"
	},
	{
	  "quote": "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Kindness is the language which the deaf can hear and the blind can see.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Be the chief but never the lord.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Every action of our lives touches on some chord that will vibrate in eternity.",
	  "author": "Edwin Chapin"
	},
	{
	  "quote": "I may not know everything, but everything is not known yet anyway.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The bird of paradise alights only upon the hand that does not grasp.",
	  "author": "John Berry"
	},
	{
	  "quote": "If we could see the miracle of a single flower clearly, our whole life would change.",
	  "author": "Buddha"
	},
	{
	  "quote": "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
	  "author": "Old German proverb"
	},
	{
	  "quote": "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "You cannot travel the path until you have become the path itself.",
	  "author": "Buddha"
	},
	{
	  "quote": "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
	  "author": "Elisabeth Kubler-Ross"
	},
	{
	  "quote": "Keep your eyes on the stars and your feet on the ground.",
	  "author": "Theodore Roosevelt"
	},
	{
	  "quote": "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
	  "author": "William White"
	},
	{
	  "quote": "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
	  "author": "Jamie Paolinetti"
	},
	{
	  "quote": "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "When you lose, don't lose the lesson.",
	  "author": ""
	},
	{
	  "quote": "Character develops itself in the stream of life.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "If you want a thing done well, do it yourself.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "All the great performers I have worked with are fuelled by a personal dream.",
	  "author": "John Eliot"
	},
	{
	  "quote": "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
	  "author": "Sam Levenson"
	},
	{
	  "quote": "No one has ever become poor by giving.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "An obstacle may be either a stepping stone or a stumbling block.",
	  "author": ""
	},
	{
	  "quote": "Everything can be taken from a man but ... the last of the human freedoms � to choose ones attitude in any given set of circumstances, to choose ones own way.",
	  "author": "Victor Frankl"
	},
	{
	  "quote": "I think and that is all that I am.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The greatest barrier to success is the fear of failure.",
	  "author": "Eriksson"
	},
	{
	  "quote": "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.",
	  "author": "John Ruskin"
	},
	{
	  "quote": "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "I want you to be everything that's you, deep at the center of your being.",
	  "author": "Confucius"
	},
	{
	  "quote": "The heart has eyes which the brain knows nothing of.",
	  "author": "Charles Perkhurst"
	},
	{
	  "quote": "If you aren't going all the way, why go at all?",
	  "author": "Joe Namath"
	},
	{
	  "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
	  "author": "Confucius"
	},
	{
	  "quote": "We choose our destiny in the way we treat others.",
	  "author": "Wit"
	},
	{
	  "quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
	  "author": "John Astin"
	},
	{
	  "quote": "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.",
	  "author": "Pierre Abelard"
	},
	{
	  "quote": "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "Wicked people are always surprised to find ability in those that are good.",
	  "author": "Marquis Vauvenargues"
	},
	{
	  "quote": "If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
	  "author": ""
	},
	{
	  "quote": "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
	  "author": "Buddha"
	},
	{
	  "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Kind words do not cost much. Yet they accomplish much.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "I destroy my enemies when I make them my friends.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Feeling and longing are the motive forces behind all human endeavor and human creations.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
	  "author": "Robert Lynd"
	},
	{
	  "quote": "Stay committed to your decisions, but stay flexible in your approach.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "The path to success is to take massive, determined action.",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "What separates the winners from the losers is how a person reacts to each new twist of fate.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "Ignorant men don't know what good they hold in their hands until they've flung it away.",
	  "author": "Sophocles"
	},
	{
	  "quote": "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
	  "author": "Anne Bronte"
	},
	{
	  "quote": "Tension is who you think you should be. Relaxation is who you are.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "We do what we do because we believe.",
	  "author": ""
	},
	{
	  "quote": "Never bend your head. Always hold it high. Look the world right in the eye.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.",
	  "author": "Dhammapada"
	},
	{
	  "quote": "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
	  "author": "Ovid"
	},
	{
	  "quote": "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
	  "author": "Buddha"
	},
	{
	  "quote": "Sometimes it is better to lose and do the right thing than to win and do the wrong thing.",
	  "author": "Tony Blair"
	},
	{
	  "quote": "Silence is the true friend that never betrays.",
	  "author": "Confucius"
	},
	{
	  "quote": "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "To want to be what one can be is purpose in life.",
	  "author": "Cynthia Ozick"
	},
	{
	  "quote": "To change ones life, start immediately, do it flamboyantly, no exceptions.",
	  "author": "William James"
	},
	{
	  "quote": "I have done my best: that is about all the philosophy of living one needs.",
	  "author": "Lin-yutang"
	},
	{
	  "quote": "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
	  "author": "John F. Kennedy"
	},
	{
	  "quote": "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
	  "author": "Ajahn Chah"
	},
	{
	  "quote": "Whoever is happy will make others happy, too.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Character develops itself in the stream of life.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Everything can be taken from a man but ... the last of the human freedoms � to choose ones attitude in any given set of circumstances, to choose ones own way.",
	  "author": "Victor Frankl"
	},
	{
	  "quote": "Better than a thousand hollow words, is one word that brings peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "The only real valuable thing is intuition.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.",
	  "author": "Booker Washington"
	},
	{
	  "quote": "The steeper the mountain the harder the climb the better the view from the finishing line",
	  "author": ""
	},
	{
	  "quote": "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
	  "author": "Dr. David M. Burns"
	},
	{
	  "quote": "Wisdom begins in wonder.",
	  "author": "Socrates"
	},
	{
	  "quote": "I have done my best: that is about all the philosophy of living one needs.",
	  "author": "Lin-yutang"
	},
	{
	  "quote": "Forgiveness is choosing to love. It is the first skill of self-giving love.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Peace cannot be kept by force. It can only be achieved by understanding.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "When I let go of what I am, I become what I might be.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "It does not matter how slowly you go as long as you do not stop.",
	  "author": "Confucius"
	},
	{
	  "quote": "Time is not a measure the length of a day or month or year but more a measure of what you have accomplished.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "No person is your friend who demands your silence, or denies your right to grow.",
	  "author": "Alice Walker"
	},
	{
	  "quote": "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
	  "author": "Buddha"
	},
	{
	  "quote": "Peace comes from within. Do not seek it without.",
	  "author": "Buddha"
	},
	{
	  "quote": "When there is no enemy within, the enemies outside cannot hurt you.",
	  "author": "African proverb"
	},
	{
	  "quote": "He who controls others may be powerful, but he who has mastered himself is mightier still.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one.",
	  "author": "John Lennon"
	},
	{
	  "quote": "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
	  "author": "Wolfgang Amadeus Mozart"
	},
	{
	  "quote": "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
	  "author": "H. Bertram Lewis"
	},
	{
	  "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "The final proof of greatness lies in being able to endure criticism without resentment.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "As an organizer I start from where the world is, as it is, not as I would like it to be.",
	  "author": "Saul Alinsky"
	},
	{
	  "quote": "The biggest adventure you can ever take is to live the life of your dreams.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "You are the only person on Earth who can use your ability.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "Don't let what you can't do stop you from doing what you can do.",
	  "author": ""
	},
	{
	  "quote": "Complaining doesn't change a thing only taking action does.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
	  "author": "Charles A. Lindbergh"
	},
	{
	  "quote": "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "If you can't feed a hundred people, then feed just one.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Everything that exists is in a manner the seed of that which will be.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Enjoy the little things, for one day you may look back and realize they were the big things.",
	  "author": "Robert Brault"
	},
	{
	  "quote": "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Think how hard physics would be if particles could think.",
	  "author": "Murray Gell-Mann"
	},
	{
	  "quote": "Let the beauty of what you love be what you do.",
	  "author": "Rumi"
	},
	{
	  "quote": "The world turns aside to let any man pass who knows where he is going.",
	  "author": "Epictetus"
	},
	{
	  "quote": "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.",
	  "author": "Walter Cronkite"
	},
	{
	  "quote": "Beauty is not in the face; beauty is a light in the heart.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "A day of worry is more exhausting than a day of work.",
	  "author": "John Lubbock"
	},
	{
	  "quote": "I never think of the future. It comes soon enough.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "He who controls others may be powerful, but he who has mastered himself is mightier still.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Truth, and goodness, and beauty are but different faces of the same all.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "All I can say about life is, Oh God, enjoy it!",
	  "author": "Bob Newhart"
	},
	{
	  "quote": "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
	  "author": "Joyce Brothers"
	},
	{
	  "quote": "The day is already blessed, find peace within it.",
	  "author": ""
	},
	{
	  "quote": "Tension is who you think you should be. Relaxation is who you are.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "To be great is to be misunderstood.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Love all, trust a few, do wrong to none.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "We all live with the objective of being happy; our lives are all different and yet the same.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
	  "author": "Alfred Adler"
	},
	{
	  "quote": "Never, never, never give up.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Think as a wise man but communicate in the language of the people.",
	  "author": "William Yeats"
	},
	{
	  "quote": "Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
	  "author": "Frederick Douglass"
	},
	{
	  "quote": "The most decisive actions of our life... are most often unconsidered actions.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "As we grow as unique persons, we learn to respect the uniqueness of others.",
	  "author": "Robert Schuller"
	},
	{
	  "quote": "Failure doesn't mean you are a failure it just means you haven't succeeded yet.",
	  "author": "Robert Schuller"
	},
	{
	  "quote": "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "They can do all because they think they can.",
	  "author": "Virgil"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
	  "author": "Buddha"
	},
	{
	  "quote": "In all chaos there is a cosmos, in all disorder a secret order.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "It is the quality of our work which will please God, not the quantity.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Try and fail, but don't fail to try.",
	  "author": "Stephen Kaggwa"
	},
	{
	  "quote": "The heart has its reasons which reason knows not of.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
	  "author": "H. Bertram Lewis"
	},
	{
	  "quote": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
	  "author": "Confucius"
	},
	{
	  "quote": "First say to yourself what you would be; and then do what you have to do.",
	  "author": "Epictetus"
	},
	{
	  "quote": "The ladder of success is never crowded at the top.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "You can do what's reasonable or you can decide what's possible.",
	  "author": ""
	},
	{
	  "quote": "Nothing diminishes anxiety faster than action.",
	  "author": "Walter Anderson"
	},
	{
	  "quote": "Don't be afraid to go out on a limb. That's where the fruit is.",
	  "author": "H. Jackson Browne"
	},
	{
	  "quote": "Mistakes are always forgivable, if one has the courage to admit them.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "I allow my intuition to lead my path.",
	  "author": "Manuel Puig"
	},
	{
	  "quote": "Today is the tomorrow we worried about yesterday.",
	  "author": ""
	},
	{
	  "quote": "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "What is necessary to change a person is to change his awareness of himself.",
	  "author": "Abraham Maslow"
	},
	{
	  "quote": "Keep silence for the most part, and speak only when you must, and then briefly.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Fear not for the future, weep not for the past.",
	  "author": "Percy Shelley"
	},
	{
	  "quote": "The mind is everything. What you think you become.",
	  "author": "Buddha"
	},
	{
	  "quote": "Try not to become a man of success, but rather try to become a man of value.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "We are Divine enough to ask and we are important enough to receive.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "If you kick a stone in anger, you'll hurt your own foot.",
	  "author": "Korean proverb"
	},
	{
	  "quote": "Put your future in good hands � your own.",
	  "author": ""
	},
	{
	  "quote": "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "All men who have achieved great things have been great dreamers.",
	  "author": "Orison Marden"
	},
	{
	  "quote": "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
	  "author": "Buddha"
	},
	{
	  "quote": "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
	  "author": "Margaret Mead"
	},
	{
	  "quote": "To see things in the seed, that is genius.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
	  "author": "Charles DeLint"
	},
	{
	  "quote": "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
	  "author": "Bertrand Russell"
	},
	{
	  "quote": "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
	  "author": "Douglas Adams"
	},
	{
	  "quote": "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
	  "author": ""
	},
	{
	  "quote": "The greatest antidote to insecurity and the sense of fear is compassion � it brings one back to the basis of one's inner strength",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
	  "author": "Norman Schwarzkopf"
	},
	{
	  "quote": "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
	  "author": "John Steinbeck"
	},
	{
	  "quote": "No yesterdays are ever wasted for those who give themselves to today.",
	  "author": "Brendan Francis"
	},
	{
	  "quote": "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
	  "author": "Sydney Smith"
	},
	{
	  "quote": "I may not know everything, but everything is not known yet anyway.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
	  "author": "Dhammapada"
	},
	{
	  "quote": "Chaos is inherent in all compounded things. Strive on with diligence.",
	  "author": "Buddha"
	},
	{
	  "quote": "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
	  "author": "Sue Patton Thoele"
	},
	{
	  "quote": "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
	  "author": "Francois de La Rochefoucauld"
	},
	{
	  "quote": "Make the most of yourself, for that is all there is of you.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "History will be kind to me for I intend to write it.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "As the rest of the world is walking out the door, your best friends are the ones walking in.",
	  "author": ""
	},
	{
	  "quote": "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
	  "author": "Vernon Cooper"
	},
	{
	  "quote": "The person born with a talent they are meant to use will find their greatest happiness in using it.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
	  "author": "Washington Irving"
	},
	{
	  "quote": "In all chaos there is a cosmos, in all disorder a secret order.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "The universe is made of stories, not atoms.",
	  "author": "Muriel Rukeyser"
	},
	{
	  "quote": "It is on our failures that we base a new and different and better success.",
	  "author": "Havelock Ellis"
	},
	{
	  "quote": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
	  "author": "George Sheehan"
	},
	{
	  "quote": "Ask yourself the secret of your success. Listen to your answer, and practice it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
	  "author": "Anne Bronte"
	},
	{
	  "quote": "The best way to pay for a lovely moment is to enjoy it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Respect should be earned by actions, and not acquired by years.",
	  "author": "Frank Wright"
	},
	{
	  "quote": "I hear and I forget. I see and I remember. I do and I understand.",
	  "author": "Confucius"
	},
	{
	  "quote": "We cannot change our memories, but we can change their meaning and the power they have over us.",
	  "author": "David Seamans"
	},
	{
	  "quote": "Always tell the truth. That way, you don't have to remember what you said.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Do something wonderful, people may imitate it.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
	  "author": "Paul Graham"
	},
	{
	  "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.",
	  "author": "Will Durant"
	},
	{
	  "quote": "We shall never know all the good that a simple smile can do.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
	  "author": "Chuck Norris"
	},
	{
	  "quote": "Sometimes the biggest act of courage is a small one.",
	  "author": "Lauren Raffo"
	},
	{
	  "quote": "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
	  "author": "Buddha"
	},
	{
	  "quote": "Let the beauty of what you love be what you do.",
	  "author": "Rumi"
	},
	{
	  "quote": "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
	  "author": "Henry Miller"
	},
	{
	  "quote": "Strong beliefs win strong men, and then make them stronger.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "No man is free who is not master of himself.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "People are not lazy. They simply have impotent goals � that is, goals that do not inspire them.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "You do not become good by trying to be good, but by finding the goodness that is already within you.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "Winners have simply formed the habit of doing things losers don't like to do.",
	  "author": "Albert Gray"
	},
	{
	  "quote": "Waste no more time arguing about what a good man should be. Be one.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "A bend in the road is not the end of the road...unless you fail to make the turn.",
	  "author": ""
	},
	{
	  "quote": "Don't be afraid to go out on a limb. That's where the fruit is.",
	  "author": "H. Jackson Browne"
	},
	{
	  "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Keep true to the dreams of thy youth.",
	  "author": "Friedrich von Schiller"
	},
	{
	  "quote": "Great talent finds happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Happiness often sneaks in through a door you didn't know you left open.",
	  "author": "John Barrymore"
	},
	{
	  "quote": "Decision is a risk rooted in the courage of being free.",
	  "author": "Paul Tillich"
	},
	{
	  "quote": "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "The things that one most wants to do are the things that are probably most worth doing.",
	  "author": "Winifred Holtby"
	},
	{
	  "quote": "Always bear in mind that your own resolution to succeed is more important than any one thing.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Think as a wise man but communicate in the language of the people.",
	  "author": "William Yeats"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
	  "author": "Edward Young"
	},
	{
	  "quote": "Life is like a sewer. What you get out of it depends on what you put into it.",
	  "author": "Tom Lehrer"
	},
	{
	  "quote": "Setting an example is not the main means of influencing another, it is the only means.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "I want you to be everything that's you, deep at the center of your being.",
	  "author": "Confucius"
	},
	{
	  "quote": "It has never been my object to record my dreams, just to realize them.",
	  "author": "Man Ray"
	},
	{
	  "quote": "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "What is necessary to change a person is to change his awareness of himself.",
	  "author": "Abraham Maslow"
	},
	{
	  "quote": "To forgive is to set a prisoner free and realize that prisoner was you.",
	  "author": "Lewis B. Smedes"
	},
	{
	  "quote": "There is no greater harm than that of time wasted.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "Happiness mainly comes from our own attitude, rather than from external factors.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Experience is simply the name we give our mistakes.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "To study and not think is a waste. To think and not study is dangerous.",
	  "author": "Confucius"
	},
	{
	  "quote": "Life is not measured by the breaths we take, but by the moments that take our breath.",
	  "author": ""
	},
	{
	  "quote": "Chaos and Order are not enemies, only opposites.",
	  "author": "Richard Garriott"
	},
	{
	  "quote": "You must welcome change as the rule but not as your ruler.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Progress always involves risks. You can't steal second base and keep your foot on first.",
	  "author": "Frederick Wilcox"
	},
	{
	  "quote": "Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody.",
	  "author": "Henry Longfellow"
	},
	{
	  "quote": "The secret of success is constancy to purpose.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
	  "author": "Harriet Lerner"
	},
	{
	  "quote": "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "Rainbows apologize for angry skies.",
	  "author": "Sylvia Voirol"
	},
	{
	  "quote": "Fear grows in darkness; if you think theres a bogeyman around, turn on the light.",
	  "author": "Dorothy Thompson"
	},
	{
	  "quote": "He who deliberates fully before taking a step will spend his entire life on one leg.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	  "author": ""
	},
	{
	  "quote": "We are Divine enough to ask and we are important enough to receive.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Be kind whenever possible. It is always possible.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Peace begins with a smile.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you�ll never get back.",
	  "author": ""
	},
	{
	  "quote": "Be your own hero, it's cheaper than a movie ticket.",
	  "author": "Doug Horton"
	},
	{
	  "quote": "Kind words will unlock an iron door.",
	  "author": "Turkish proverb"
	},
	{
	  "quote": "Turn your face toward the sun and the shadows will fall behind you.",
	  "author": "Maori proverb"
	},
	{
	  "quote": "Much wisdom often goes with fewer words.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Great talent finds happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Better to have loved and lost, than to have never loved at all.",
	  "author": "St. Augustine"
	},
	{
	  "quote": "The things that one most wants to do are the things that are probably most worth doing.",
	  "author": "Winifred Holtby"
	},
	{
	  "quote": "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
	  "author": "Buddha"
	},
	{
	  "quote": "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Go to your bosom: Knock there, and ask your heart what it doth know.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Things turn out best for those who make the best of the way things turn out.",
	  "author": "Jack Buck"
	},
	{
	  "quote": "As the rest of the world is walking out the door, your best friends are the ones walking in.",
	  "author": ""
	},
	{
	  "quote": "Stay away from what might have been and look at what will be.",
	  "author": "Marsha Petrie Sue"
	},
	{
	  "quote": "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
	  "author": "Robert Louis Stevenson"
	},
	{
	  "quote": "No man can succeed in a line of endeavor which he does not like.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Don't wait for people to be friendly. Show them how.",
	  "author": ""
	},
	{
	  "quote": "Tension is who you think you should be. Relaxation is who you are.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Can you imagine what I would do if I could do all I can?",
	  "author": "Sun Tzu"
	},
	{
	  "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.",
	  "author": "Whoopi Goldberg"
	},
	{
	  "quote": "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "Once you choose hope, anythings possible.",
	  "author": "Christopher Reeve"
	},
	{
	  "quote": "Ability will never catch up with the demand for it.",
	  "author": "Confucius"
	},
	{
	  "quote": "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
	  "author": "Buddha"
	},
	{
	  "quote": "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
	  "author": "M. Scott Peck"
	},
	{
	  "quote": "Yeah we all shine on, like the moon, and the stars, and the sun.",
	  "author": "John Lennon"
	},
	{
	  "quote": "If one does not know to which port is sailing, no wind is favorable.",
	  "author": "Seneca"
	},
	{
	  "quote": "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
	  "author": "Henry Reed"
	},
	{
	  "quote": "It is impossible to feel grateful and depressed in the same moment.",
	  "author": "Naomi Williams"
	},
	{
	  "quote": "Setting goals is the first step in turning the invisible into the visible.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "The day always looks brighter from behind a smile.",
	  "author": ""
	},
	{
	  "quote": "Absence makes the heart grow fonder.",
	  "author": "Haynes Bayly"
	},
	{
	  "quote": "Follow your instincts. That is where true wisdom manifests itself.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "We cannot change our memories, but we can change their meaning and the power they have over us.",
	  "author": "David Seamans"
	},
	{
	  "quote": "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
	  "author": "Amiel"
	},
	{
	  "quote": "The longer we dwell on our misfortunes, the greater is their power to harm us.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
	  "author": "Pat Riley"
	},
	{
	  "quote": "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
	  "author": "Charles A. Lindbergh"
	},
	{
	  "quote": "A prudent question is one half of wisdom.",
	  "author": "Francis Bacon"
	},
	{
	  "quote": "All truths are easy to understand once they are discovered; the point is to discover them.",
	  "author": "Galileo Galilei"
	},
	{
	  "quote": "First say to yourself what you would be; and then do what you have to do.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Life is a learning experience, only if you learn.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "Don't let what you can't do stop you from doing what you can do.",
	  "author": ""
	},
	{
	  "quote": "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
	  "author": "William Arthur Ward"
	},
	{
	  "quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	  "author": ""
	},
	{
	  "quote": "Joy is the best makeup.",
	  "author": "Anne Lamott"
	},
	{
	  "quote": "The smallest act of kindness is worth more than the grandest intention.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "The mind unlearns with difficulty what it has long learned.",
	  "author": "Seneca"
	},
	{
	  "quote": "We know from science that nothing in the universe exists as an isolated or independent entity.",
	  "author": "Margaret Wheatley"
	},
	{
	  "quote": "Every great advance in science has issued from a new audacity of the imagination.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.",
	  "author": "John Ruskin"
	},
	{
	  "quote": "Everything in the universe goes by indirection. There are no straight lines.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "What do we live for, if it is not to make life less difficult for each other?",
	  "author": "George Eliot"
	},
	{
	  "quote": "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.",
	  "author": "Tenzin Gyatso"
	},
	{
	  "quote": "In all chaos there is a cosmos, in all disorder a secret order.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "If you wish to be a writer, write.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Everything you are against weakens you. Everything you are for empowers you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "All difficult things have their origin in that which is easy, and great things in that which is small.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "It can't be spring if your heart is filled with past failures.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "We may encounter many defeats but we must not be defeated.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Whenever something negative happens to you, there is a deep lesson concealed within it.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Arriving at one point is the starting point to another.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Each day provides its own gifts.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Logic will get you from A to B. Imagination will take you everywhere.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "A man of ability and the desire to accomplish something can do anything.",
	  "author": "Donald Kircher"
	},
	{
	  "quote": "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
	  "author": "Sarah Breathnach"
	},
	{
	  "quote": "Arriving at one point is the starting point to another.",
	  "author": "John Dewey"
	},
	{
	  "quote": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
	  "author": "Confucius"
	},
	{
	  "quote": "The mind unlearns with difficulty what it has long learned.",
	  "author": "Seneca"
	},
	{
	  "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
	  "author": "Rudolf Arnheim"
	},
	{
	  "quote": "Inspiration exists, but it has to find us working.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
	  "author": "Etty Hillesum"
	},
	{
	  "quote": "Only when we are no longer afraid do we begin to live.",
	  "author": "Dorothy Thompson"
	},
	{
	  "quote": "If we are not fully ourselves, truly in the present moment, we miss everything.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "We must not allow ourselves to become like the system we oppose.",
	  "author": "Bishop Desmond Tutu"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the universe.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Chaos and Order are not enemies, only opposites.",
	  "author": "Richard Garriott"
	},
	{
	  "quote": "Never let lack of money interfere with having fun.",
	  "author": ""
	},
	{
	  "quote": "Begin at once to live and count each separate day as a separate life.",
	  "author": "Seneca"
	},
	{
	  "quote": "The world is but a canvas to the imagination.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
	  "author": "William Channing"
	},
	{
	  "quote": "We choose our destiny in the way we treat others.",
	  "author": "Wit"
	},
	{
	  "quote": "Don't be afraid to go out on a limb. That's where the fruit is.",
	  "author": "H. Jackson Browne"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "We do what we do because we believe.",
	  "author": ""
	},
	{
	  "quote": "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
	  "author": "Paul Graham"
	},
	{
	  "quote": "Never ignore a gut feeling, but never believe that it's enough.",
	  "author": "Robert Heller"
	},
	{
	  "quote": "All I can say about life is, Oh God, enjoy it!",
	  "author": "Bob Newhart"
	},
	{
	  "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "Ignorant men don't know what good they hold in their hands until they've flung it away.",
	  "author": "Sophocles"
	},
	{
	  "quote": "The world has the habit of making room for the man whose actions show that he knows where he is going.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "You are special, you are unique, you are the best!",
	  "author": "Cathy Pulsifer"
	},
	{
	  "quote": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding about ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
	  "author": "Lisa Alther"
	},
	{
	  "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
	  "author": "Buddha"
	},
	{
	  "quote": "To be happy is to be able to become aware of oneself without fright.",
	  "author": "Walter Benjamin"
	},
	{
	  "quote": "Strength to carry on despite the odds means you have faith in your own abilities and know how.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Make the most of yourself for that is all there is of you.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
	  "author": "Sophocles"
	},
	{
	  "quote": "No matter how hard the past, you can always begin again.",
	  "author": "Buddha"
	},
	{
	  "quote": "Happiness is not something ready made. It comes from your own actions.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Be gentle first with yourself if you wish to be gentle with others.",
	  "author": "Lama Yeshe"
	},
	{
	  "quote": "A man who doesn't trust himself can never really trust anyone else.",
	  "author": "Cardinal Retz"
	},
	{
	  "quote": "The journey of a thousand miles begins with one step.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "To be wronged is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Someone is special only if you tell them.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Joy is the best makeup.",
	  "author": "Anne Lamott"
	},
	{
	  "quote": "We make our own fortunes and we call them fate.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "I hear and I forget. I see and I remember. I do and I understand.",
	  "author": "Confucius"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal.",
	  "author": "Vince Lombardi"
	},
	{
	  "quote": "It takes courage to grow up and become who you really are.",
	  "author": "E. E. Cummings"
	},
	{
	  "quote": "Always seek out the seed of triumph in every adversity.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "At the center of your being you have the answer; you know who you are and you know what you want.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Rather than wishing for change, you first must be prepared to change.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "Always be smarter than the people who hire you.",
	  "author": "Lena Horne"
	},
	{
	  "quote": "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.",
	  "author": "Buddha"
	},
	{
	  "quote": "Everything can be taken from a man but ... the last of the human freedoms � to choose ones attitude in any given set of circumstances, to choose ones own way.",
	  "author": "Victor Frankl"
	},
	{
	  "quote": "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
	  "author": "Danilo Dolci"
	},
	{
	  "quote": "Fame usually comes to those who are thinking about something else.",
	  "author": "Holmes"
	},
	{
	  "quote": "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "I may not know everything, but everything is not known yet anyway.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Know how to listen, and you will profit even from those who talk badly.",
	  "author": "Plutarch"
	},
	{
	  "quote": "First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "It is never too late to be what you might have been.",
	  "author": "George Eliot"
	},
	{
	  "quote": "Every gift from a friend is a wish for your happiness.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Only do what your heart tells you.",
	  "author": "Princess Diana"
	},
	{
	  "quote": "To get something you never had, you have to do something you never did.",
	  "author": ""
	},
	{
	  "quote": "Make the most of yourself, for that is all there is of you.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The superior man acts before he speaks, and afterwards speaks according to his action.",
	  "author": "Confucius"
	},
	{
	  "quote": "A single conversation across the table with a wise person is worth a months study of books.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
	  "author": "Kathleen Norris"
	},
	{
	  "quote": "Turn your face toward the sun and the shadows will fall behind you.",
	  "author": "Maori proverb"
	},
	{
	  "quote": "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.",
	  "author": "Pierre Abelard"
	},
	{
	  "quote": "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
	  "author": ""
	},
	{
	  "quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
	  "author": "Charlotte Gilman"
	},
	{
	  "quote": "The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "You can never cross the ocean unless you have the courage to lose sight of the shore.",
	  "author": ""
	},
	{
	  "quote": "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "What we think, we become.",
	  "author": "Buddha"
	},
	{
	  "quote": "The beginning of knowledge is the discovery of something we do not understand.",
	  "author": "Frank Herbert"
	},
	{
	  "quote": "Peace begins with a smile.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Work for something because it is good, not just because it stands a chance to succeed.",
	  "author": "Vaclav Havel"
	},
	{
	  "quote": "Real magic in relationships means an absence of judgement of others.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.",
	  "author": "Booker Washington"
	},
	{
	  "quote": "Every man takes the limits of his own field of vision for the limits of the world.",
	  "author": "Arthur Schopenhauer"
	},
	{
	  "quote": "Who sows virtue reaps honour.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Knowledge rests not upon truth alone, but upon error also.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.",
	  "author": "Katherine Mansfield"
	},
	{
	  "quote": "Be what you are. This is the first step toward becoming better than you are.",
	  "author": "Julius Charles Hare"
	},
	{
	  "quote": "Minds are like parachutes. They only function when open.",
	  "author": "Thomas Dewar"
	},
	{
	  "quote": "A man is not old as long as he is seeking something.",
	  "author": "Edmond Rostand"
	},
	{
	  "quote": "Logic will get you from A to B. Imagination will take you everywhere.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Faith in oneself is the best and safest course.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
	  "author": "Buddha"
	},
	{
	  "quote": "The Creator has not given you a longing to do that which you have no ability to do.",
	  "author": "Orison Marden"
	},
	{
	  "quote": "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
	  "author": "Victoria Holt"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
	  "author": "Sarah Breathnach"
	},
	{
	  "quote": "When deeds and words are in accord, the whole world is transformed.",
	  "author": "Chuang Tzu"
	},
	{
	  "quote": "Kind words can be short and easy to speak but their echoes are truly endless.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Take heed: you do not find what you do not seek.",
	  "author": "English proverb"
	},
	{
	  "quote": "Yeah we all shine on, like the moon, and the stars, and the sun.",
	  "author": "John Lennon"
	},
	{
	  "quote": "No man was ever wise by chance.",
	  "author": "Seneca"
	},
	{
	  "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
	  "author": "Walt Emerson"
	},
	{
	  "quote": "Better to have loved and lost, than to have never loved at all.",
	  "author": "St. Augustine"
	},
	{
	  "quote": "For everything that lives is holy, life delights in life.",
	  "author": "William Blake"
	},
	{
	  "quote": "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
	  "author": "Robert Graves"
	},
	{
	  "quote": "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Today is the tomorrow we worried about yesterday.",
	  "author": ""
	},
	{
	  "quote": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
	  "author": "Hannah Arendt"
	},
	{
	  "quote": "Peace comes from within. Do not seek it without.",
	  "author": "Buddha"
	},
	{
	  "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Our passion is our strength.",
	  "author": "Billie Armstrong"
	},
	{
	  "quote": "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "Wisdom is the supreme part of happiness.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Happiness often sneaks in through a door you didn't know you left open.",
	  "author": "John Barrymore"
	},
	{
	  "quote": "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
	  "author": "Joseph Roux"
	},
	{
	  "quote": "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Take heed: you do not find what you do not seek.",
	  "author": "English proverb"
	},
	{
	  "quote": "Fear of failure is one attitude that will keep you at the same point in your life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.",
	  "author": "Buddha"
	},
	{
	  "quote": "Spring is a time for rebirth and the fulfilment of new life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Being angry never solves anything.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "My mama always said: life's like a box of chocolate � you never know what you gonna get.",
	  "author": "Forrest Gump"
	},
	{
	  "quote": "There is nothing happens to any person but what was in his power to go through with.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "It can't be spring if your heart is filled with past failures.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "From little acorns mighty oaks do grow.",
	  "author": "American proverb"
	},
	{
	  "quote": "When deeds speak, words are nothing.",
	  "author": "African proverb"
	},
	{
	  "quote": "Peace cannot be kept by force. It can only be achieved by understanding.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Nature is a mutable cloud which is always and never the same.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Be faithful in small things because it is in them that your strength lies.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
	  "author": "Alfred Korzybski"
	},
	{
	  "quote": "Society develops wit, but its contemplation alone forms genius.",
	  "author": "Madame de Stael"
	},
	{
	  "quote": "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
	  "author": "Seneca"
	},
	{
	  "quote": "Try not to become a man of success, but rather try to become a man of value.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
	  "author": "Sam Levenson"
	},
	{
	  "quote": "Life is what happens while you are making other plans.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Be your own hero, it's cheaper than a movie ticket.",
	  "author": "Doug Horton"
	},
	{
	  "quote": "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "The art of progress is to preserve order amid change, and to preserve change amid order.",
	  "author": "Alfred Whitehead"
	},
	{
	  "quote": "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Things turn out best for those who make the best of the way things turn out.",
	  "author": "Jack Buck"
	},
	{
	  "quote": "We make a living by what we get, but we make a life by what we give.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Can you imagine what I would do if I could do all I can?",
	  "author": "Sun Tzu"
	},
	{
	  "quote": "The two most powerful warriors are patience and time.",
	  "author": "Leo Tolstoy"
	},
	{
	  "quote": "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
	  "author": "Robert Fulghum"
	},
	{
	  "quote": "The smallest act of kindness is worth more than the grandest intention.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Make the best use of what is in your power, and take the rest as it happens.",
	  "author": "Epictetus"
	},
	{
	  "quote": "If you want to study yourself � look into the hearts of other people. If you want to study other people � look into your own heart.",
	  "author": "Friedrich von Schiller"
	},
	{
	  "quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Nobody will believe in you unless you believe in yourself.",
	  "author": "Liberace"
	},
	{
	  "quote": "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
	  "author": "Naguib Mahfouz"
	},
	{
	  "quote": "Open minds lead to open doors.",
	  "author": ""
	},
	{
	  "quote": "You are special, you are unique, you are the best!",
	  "author": "Cathy Pulsifer"
	},
	{
	  "quote": "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
	  "author": "W. Clement Stone"
	},
	{
	  "quote": "Real magic in relationships means an absence of judgement of others.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Maxim for life: You get treated in life the way you teach people to treat you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Make the most of yourself for that is all there is of you.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Happiness is found in doing, not merely possessing.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "The first duty of a human being is to assume the right functional relationship to society � more briefly, to find your real job, and do it.",
	  "author": "Charlotte Perkins Gilman"
	},
	{
	  "quote": "The world is but a canvas to the imagination.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "You'll see it when you believe it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "We make our own fortunes and we call them fate.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
	  "author": "Morris West"
	},
	{
	  "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
	  "author": "Aristotle"
	},
	{
	  "quote": "A prudent question is one half of wisdom.",
	  "author": "Francis Bacon"
	},
	{
	  "quote": "Experience keeps a dear school, but fools will learn in no other.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "The poor man is not he who is without a cent, but he who is without a dream.",
	  "author": "Harry Kemp"
	},
	{
	  "quote": "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Thought is the blossom; language the bud; action the fruit behind it.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Your work is to discover your world and then with all your heart give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "There is nothing so useless as doing efficiently that which should not be done at all.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
	  "author": "Wolfgang Amadeus Mozart"
	},
	{
	  "quote": "We know from science that nothing in the universe exists as an isolated or independent entity.",
	  "author": "Margaret Wheatley"
	},
	{
	  "quote": "First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "A rolling stone gathers no moss.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Every problem has a gift for you in its hands.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
	  "author": "Bernice Reagon"
	},
	{
	  "quote": "Everything in the universe goes by indirection. There are no straight lines.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "To be wronged is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
	  "author": "Robert Fulghum"
	},
	{
	  "quote": "If a man does his best, what else is there?",
	  "author": "George Patton"
	},
	{
	  "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
	  "author": "A. A. Milne"
	},
	{
	  "quote": "Take heed: you do not find what you do not seek.",
	  "author": "English proverb"
	},
	{
	  "quote": "If you can't feed a hundred people, then feed just one.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
	  "author": "David Jordan"
	},
	{
	  "quote": "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
	  "author": "Buddha"
	},
	{
	  "quote": "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "As we are liberated from our own fear, our presence automatically liberates others.",
	  "author": "Nelson Mandela"
	},
	{
	  "quote": "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "Silence is a source of great strength.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "To be tested is good. The challenged life may be the best therapist.",
	  "author": "Gail Sheehy"
	},
	{
	  "quote": "Can you imagine what I would do if I could do all I can?",
	  "author": "Sun Tzu"
	},
	{
	  "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "To bring anything into your life, imagine that it's already there.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The most successful people are those who are good at plan B.",
	  "author": "James Yorke"
	},
	{
	  "quote": "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
	  "author": "Nikola Tesla"
	},
	{
	  "quote": "Mountains cannot be surmounted except by winding paths.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Only do what your heart tells you.",
	  "author": "Princess Diana"
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "To fly as fast as thought, you must begin by knowing that you have already arrived.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
	  "author": "Johannes Gaertner"
	},
	{
	  "quote": "Obstacles are those things you see when you take your eyes off the goal.",
	  "author": "Hannah More"
	},
	{
	  "quote": "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Kind words do not cost much. Yet they accomplish much.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Great ideas often receive violent opposition from mediocre minds.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The winds and waves are always on the side of the ablest navigators.",
	  "author": "Edward Gibbon"
	},
	{
	  "quote": "We can change our lives. We can do, have, and be exactly what we wish.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
	  "author": "Pat Riley"
	},
	{
	  "quote": "Never do things others can do and will do, if there are things others cannot do or will not do.",
	  "author": "Amelia Earhart"
	},
	{
	  "quote": "The poor man is not he who is without a cent, but he who is without a dream.",
	  "author": "Harry Kemp"
	},
	{
	  "quote": "Only those who dare to fail greatly can ever achieve greatly.",
	  "author": "Robert Kennedy"
	},
	{
	  "quote": "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
	  "author": "Confucius"
	},
	{
	  "quote": "You are the only person on earth who can use your ability.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
	  "author": "Morris West"
	},
	{
	  "quote": "When you lose, don't lose the lesson.",
	  "author": ""
	},
	{
	  "quote": "Kindness is the greatest wisdom.",
	  "author": ""
	},
	{
	  "quote": "We may encounter many defeats but we must not be defeated.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Every day may not be good, but there's something good in every day.",
	  "author": ""
	},
	{
	  "quote": "A stumble may prevent a fall.",
	  "author": ""
	},
	{
	  "quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
	  "author": "Henry Longfellow"
	},
	{
	  "quote": "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
	  "author": "Frances de Sales"
	},
	{
	  "quote": "The pain passes, but the beauty remains.",
	  "author": "Pierre Auguste Renoir"
	},
	{
	  "quote": "One secret of success in life is for a man to be ready for his opportunity when it comes.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Meaning is not what you start with but what you end up with.",
	  "author": "Peter Elbow"
	},
	{
	  "quote": "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
	  "author": "James Oppenheim"
	},
	{
	  "quote": "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
	  "author": "Paavo Nurmi"
	},
	{
	  "quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
	  "author": "Sai Baba"
	},
	{
	  "quote": "You can't trust without risk but neither can you live in a cocoon.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "To know oneself is to study oneself in action with another person.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "No man can succeed in a line of endeavor which he does not like.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "If one is lucky, a solitary fantasy can totally transform one million realities.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Look forward to spring as a time when you can start to see what nature has to offer once again.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "In the end we retain from our studies only that which we practically apply.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The least of things with a meaning is worth more in life than the greatest of things without it.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "The noblest worship is to make yourself as good and as just as you can.",
	  "author": "Isocrates"
	},
	{
	  "quote": "Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending.",
	  "author": "Carl Bard"
	},
	{
	  "quote": "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
	  "author": "John Dewey"
	},
	{
	  "quote": "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
	  "author": "Joseph Roux"
	},
	{
	  "quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
	  "author": "Charlotte Gilman"
	},
	{
	  "quote": "Learn from yesterday, live for today, hope for tomorrow.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Don't think of it as failure. Think of it as time-released success.",
	  "author": "Robert Orben"
	},
	{
	  "quote": "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.",
	  "author": "Chuck Norris"
	},
	{
	  "quote": "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Know how to listen, and you will profit even from those who talk badly.",
	  "author": "Plutarch"
	},
	{
	  "quote": "You can't trust without risk but neither can you live in a cocoon.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The doors we open and close each day decide the lives we live.",
	  "author": "Flora Whittemore"
	},
	{
	  "quote": "You cannot travel the path until you have become the path itself.",
	  "author": "Buddha"
	},
	{
	  "quote": "I walk slowly, but I never walk backward.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
	  "author": "John F. Kennedy"
	},
	{
	  "quote": "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Where there is great love, there are always miracles.",
	  "author": "Willa Cather"
	},
	{
	  "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Keep silence for the most part, and speak only when you must, and then briefly.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Change your thoughts, change your life!",
	  "author": ""
	},
	{
	  "quote": "The best place to find a helping hand is at the end of your own arm.",
	  "author": ""
	},
	{
	  "quote": "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
	  "author": "Mortimer Adler"
	},
	{
	  "quote": "Every human being is the author of his own health or disease.",
	  "author": "Buddha"
	},
	{
	  "quote": "It is better to understand a little than to misunderstand a lot.",
	  "author": "Anatole France"
	},
	{
	  "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Knowing is not enough; we must apply!",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "We know the truth, not only by the reason, but by the heart.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "We choose our joys and sorrows long before we experience them.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Anybody can make history. Only a great man can write it.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "If I know what love is, it is because of you.",
	  "author": "Hermann Hesse"
	},
	{
	  "quote": "The best teacher is experience learned from failures.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Allow the world to live as it chooses, and allow yourself to live as you choose.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
	  "author": "Jacob Braude"
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
	  "author": "Chuck Norris"
	},
	{
	  "quote": "Self-trust is the first secret of success.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The harder you fall, the higher you bounce.",
	  "author": ""
	},
	{
	  "quote": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
	  "author": "James Oppenheim"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "Nature takes away any faculty that is not used.",
	  "author": "William R. Inge"
	},
	{
	  "quote": "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "Patience is the companion of wisdom.",
	  "author": "Saint Augustine"
	},
	{
	  "quote": "The worst bankrupt in the world is the person who has lost his enthusiasm.",
	  "author": "H. W. Arnold"
	},
	{
	  "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.",
	  "author": "Louis Pasteur"
	},
	{
	  "quote": "Meaning is not what you start with but what you end up with.",
	  "author": "Peter Elbow"
	},
	{
	  "quote": "While we try to teach our children all about life, our children teach us what life is all about.",
	  "author": "Angela Schwindt"
	},
	{
	  "quote": "Compassion and happiness are not a sign of weakness but a sign of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
	  "author": "Franklin D. Roosevelt"
	},
	{
	  "quote": "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Be here now. Be someplace else later. Is that so complicated?",
	  "author": "David Bader"
	},
	{
	  "quote": "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
	  "author": "Frederick Douglass"
	},
	{
	  "quote": "If it is not right do not do it; if it is not true do not say it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "An invasion of armies can be resisted, but not an idea whose time has come.",
	  "author": "Victor Hugo"
	},
	{
	  "quote": "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
	  "author": "Mahummad Ali"
	},
	{
	  "quote": "Learning without reflection is a waste, reflection without learning is dangerous.",
	  "author": "Confucius"
	},
	{
	  "quote": "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
	  "author": ""
	},
	{
	  "quote": "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Successful people ask better questions, and as a result, they get better answers.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Nothing happens unless first we dream.",
	  "author": "Carl Sandburg"
	},
	{
	  "quote": "To change ones life, start immediately, do it flamboyantly, no exceptions.",
	  "author": "William James"
	},
	{
	  "quote": "The greatest antidote to insecurity and the sense of fear is compassion � it brings one back to the basis of one's inner strength",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Everything you are against weakens you. Everything you are for empowers you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "In the middle of every difficulty lies opportunity.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The best way to pay for a lovely moment is to enjoy it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "I don't believe in failure. It's not failure if you enjoyed the process.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Truth, and goodness, and beauty are but different faces of the same all.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
	  "author": "Old German proverb"
	},
	{
	  "quote": "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Learn from yesterday, live for today, hope for tomorrow.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Beauty is not in the face; beauty is a light in the heart.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
	  "author": "David Rockefeller"
	},
	{
	  "quote": "Give it all you've got because you never know if there's going to be a next time.",
	  "author": "Danielle Ingrum"
	},
	{
	  "quote": "Happiness comes when your work and words are of benefit to yourself and others.",
	  "author": "Buddha"
	},
	{
	  "quote": "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
	  "author": "Keshavan Nair"
	},
	{
	  "quote": "The man who trusts men will make fewer mistakes than he who distrusts them.",
	  "author": "Cavour"
	},
	{
	  "quote": "A jug fills drop by drop.",
	  "author": "Buddha"
	},
	{
	  "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
	  "author": "Laozi"
	},
	{
	  "quote": "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The less effort, the faster and more powerful you will be.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Self-complacency is fatal to progress.",
	  "author": "Margaret Sangster"
	},
	{
	  "quote": "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
	  "author": "Henry Reed"
	},
	{
	  "quote": "Write your plans in pencil and give God the eraser.",
	  "author": "Paulo Coelho"
	},
	{
	  "quote": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
	  "author": "Buddha"
	},
	{
	  "quote": "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
	  "author": "Frank Wright"
	},
	{
	  "quote": "A rolling stone gathers no moss.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Freedom is the right to live as we wish.",
	  "author": "Epictetus"
	},
	{
	  "quote": "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Through perseverance many people win success out of what seemed destined to be certain failure.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Doing what you love is the cornerstone of having abundance in your life.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
	  "author": "Henry Reed"
	},
	{
	  "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
	  "author": "Arthur Rubinstein"
	},
	{
	  "quote": "The cure for boredom is curiosity. There is no cure for curiosity.",
	  "author": "Ellen Parr"
	},
	{
	  "quote": "The longer we dwell on our misfortunes, the greater is their power to harm us.",
	  "author": "Voltaire"
	},
	{
	  "quote": "The greatest barrier to success is the fear of failure.",
	  "author": "Eriksson"
	},
	{
	  "quote": "Every great advance in science has issued from a new audacity of the imagination.",
	  "author": "John Dewey"
	},
	{
	  "quote": "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
	  "author": "Frank Crane"
	},
	{
	  "quote": "When there is no enemy within, the enemies outside cannot hurt you.",
	  "author": "African proverb"
	},
	{
	  "quote": "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "First say to yourself what you would be; and then do what you have to do.",
	  "author": "Epictetus"
	},
	{
	  "quote": "We can do no great things, only small things with great love.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "As we grow as unique persons, we learn to respect the uniqueness of others.",
	  "author": "Robert Schuller"
	},
	{
	  "quote": "There is nothing happens to any person but what was in his power to go through with.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Work out your own salvation. Do not depend on others.",
	  "author": "Buddha"
	},
	{
	  "quote": "Don't focus on making the right decision, focus on making the decision the right one.",
	  "author": ""
	},
	{
	  "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
	  "author": "Rumi"
	},
	{
	  "quote": "Be like the flower, turn your face to the sun.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "Remembering a wrong is like carrying a burden on the mind.",
	  "author": "Buddha"
	},
	{
	  "quote": "He that is giddy thinks the world turns round.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "The foolish man seeks happiness in the distance; the wise grows it under his feet.",
	  "author": "James Openheim"
	},
	{
	  "quote": "Gratitude is the fairest blossom which springs from the soul.",
	  "author": "Henry Beecher"
	},
	{
	  "quote": "Nothing happens unless first we dream.",
	  "author": "Carl Sandburg"
	},
	{
	  "quote": "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
	  "author": "Confucius"
	},
	{
	  "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
	  "author": "Nikola Tesla"
	},
	{
	  "quote": "There are no failures � just experiences and your reactions to them.",
	  "author": "Tom Krause"
	},
	{
	  "quote": "The heart has eyes which the brain knows nothing of.",
	  "author": "Charles Perkhurst"
	},
	{
	  "quote": "Life shrinks or expands in proportion to one's courage.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "You cannot have what you do not want.",
	  "author": "John Acosta"
	},
	{
	  "quote": "You have to believe in yourself.",
	  "author": "Sun Tzu"
	},
	{
	  "quote": "The most important point is to accept yourself and stand on your two feet.",
	  "author": "Shunryu Suzuki"
	},
	{
	  "quote": "When you arise in the morning, think of what a precious privilege it is to be alive � to breathe, to think, to enjoy, to love.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "All the flowers of all the tomorrows are in the seeds of today.",
	  "author": ""
	},
	{
	  "quote": "Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "It is not fair to ask of others what you are unwilling to do yourself.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
	  "author": "Henry Miller"
	},
	{
	  "quote": "One today is worth two tomorrows.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "You have to think anyway, so why not think big?",
	  "author": "Donald Trump"
	},
	{
	  "quote": "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
	  "author": ""
	},
	{
	  "quote": "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "I walk slowly, but I never walk backward.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "There is no retirement for an artist, it's your way of living so there is no end to it.",
	  "author": "Henry Moore"
	},
	{
	  "quote": "To be upset over what you don't have is to waste what you do have.",
	  "author": "Ken S. Keyes"
	},
	{
	  "quote": "No one has ever become poor by giving.",
	  "author": "Anne Frank"
	},
	{
	  "quote": "Better than a thousand hollow words, is one word that brings peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Truth is powerful and it prevails.",
	  "author": "Sojourner Truth"
	},
	{
	  "quote": "Don't ruin the present with the ruined past.",
	  "author": "Ellen Gilchrist"
	},
	{
	  "quote": "Blaze with the fire that is never extinguished.",
	  "author": "Luisa Sigea"
	},
	{
	  "quote": "Make the best use of what is in your power, and take the rest as it happens.",
	  "author": "Epictetus"
	},
	{
	  "quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
	  "author": "Sai Baba"
	},
	{
	  "quote": "If you do not change direction, you may end up where you are heading.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The world is a book, and those who do not travel read only a page.",
	  "author": "Augustinus Sanctus"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the universe.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "The best thing in every noble dream is the dreamer...",
	  "author": "Moncure Conway"
	},
	{
	  "quote": "Spring is a time for rebirth and the fulfilment of new life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Every man is a volume if you know how to read him.",
	  "author": "Channing"
	},
	{
	  "quote": "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
	  "author": "Marian Edelman"
	},
	{
	  "quote": "Weve got to have a dream if we are going to make a dream come true.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "If you want things to be different, perhaps the answer is to become different yourself.",
	  "author": "Norman Peale"
	},
	{
	  "quote": "If you want your life to be more rewarding, you have to change the way you think.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "I hear and I forget. I see and I remember. I do and I understand.",
	  "author": "Confucius"
	},
	{
	  "quote": "In order to win, you must expect to win.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Everything in the universe goes by indirection. There are no straight lines.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
	  "author": ""
	},
	{
	  "quote": "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
	  "author": "Tenzin Gyatso"
	},
	{
	  "quote": "There is nothing impossible to him who will try.",
	  "author": "Alexander the Great"
	},
	{
	  "quote": "If you have no respect for your own values how can you be worthy of respect from others.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
	  "author": "Theodore Rubin"
	},
	{
	  "quote": "How far that little candle throws its beams! So shines a good deed in a naughty world.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "We must become the change we want to see.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
	  "author": "Harriet Tubman"
	},
	{
	  "quote": "Never mistake activity for achievement.",
	  "author": "John Wooden"
	},
	{
	  "quote": "You must train your intuition � you must trust the small voice inside you which tells you exactly what to say, what to decide.",
	  "author": "Ingrid Bergman"
	},
	{
	  "quote": "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
	  "author": "Buddha"
	},
	{
	  "quote": "People grow through experience if they meet life honestly and courageously. This is how character is built.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Waste no more time arguing about what a good man should be. Be one.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Freedom is not worth having if it does not connote freedom to err.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "The only real failure in life is not to be true to the best one knows.",
	  "author": "Buddha"
	},
	{
	  "quote": "Happiness comes when your work and words are of benefit to yourself and others.",
	  "author": "Buddha"
	},
	{
	  "quote": "Three things cannot be long hidden: the sun, the moon, and the truth.",
	  "author": "Buddha"
	},
	{
	  "quote": "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "He who talks more is sooner exhausted.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Everything in the universe goes by indirection. There are no straight lines.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Nobody made a greater mistake than he who did nothing because he could do only a little.",
	  "author": "Edmund Burke"
	},
	{
	  "quote": "Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "I begin with an idea and then it becomes something else.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "Those who cannot learn from history are doomed to repeat it.",
	  "author": "George Santayan"
	},
	{
	  "quote": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
	  "author": "Charles Darwin"
	},
	{
	  "quote": "Why worry about tomorrow, when today is all we have?",
	  "author": ""
	},
	{
	  "quote": "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Every man dies. Not every man really lives.",
	  "author": ""
	},
	{
	  "quote": "They must often change, who would be constant in happiness or wisdom.",
	  "author": "Confucius"
	},
	{
	  "quote": "Quality is never an accident; it is always the result of intelligent effort.",
	  "author": "John Ruskin"
	},
	{
	  "quote": "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
	  "author": "Confucius"
	},
	{
	  "quote": "The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.",
	  "author": "Carlos Castaneda"
	},
	{
	  "quote": "Difficulties are things that show a person what they are.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Our distrust is very expensive.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Obstacles are those things you see when you take your eyes off the goal.",
	  "author": "Hannah More"
	},
	{
	  "quote": "Happiness is not something ready made. It comes from your own actions.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "To get something you never had, you have to do something you never did.",
	  "author": ""
	},
	{
	  "quote": "The one who always loses, is the only person who gets the reward.",
	  "author": "Claire Charmont"
	},
	{
	  "quote": "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.",
	  "author": "Dhammapada"
	},
	{
	  "quote": "Things that were hard to bear are sweet to remember.",
	  "author": "Seneca"
	},
	{
	  "quote": "We can change our lives. We can do, have, and be exactly what we wish.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "The heart has eyes which the brain knows nothing of.",
	  "author": "Charles Perkhurst"
	},
	{
	  "quote": "To know oneself is to study oneself in action with another person.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "Only those who dare to fail greatly can ever achieve greatly.",
	  "author": "Robert Kennedy"
	},
	{
	  "quote": "Peace begins with a smile.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Stay committed to your decisions, but stay flexible in your approach.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
	  "author": "John Steinbeck"
	},
	{
	  "quote": "The only limit to your impact is your imagination and commitment.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "No matter how hard the past, you can always begin again.",
	  "author": "Buddha"
	},
	{
	  "quote": "It is better to understand a little than to misunderstand a lot.",
	  "author": "Anatole France"
	},
	{
	  "quote": "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
	  "author": "Henry Miller"
	},
	{
	  "quote": "No man can succeed in a line of endeavor which he does not like.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.",
	  "author": "Henry James"
	},
	{
	  "quote": "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
	  "author": ""
	},
	{
	  "quote": "Autumn is a second spring when every leaf is a flower.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "No valid plans for the future can be made by those who have no capacity for living now.",
	  "author": "Alan Watts"
	},
	{
	  "quote": "Things turn out best for those who make the best of the way things turn out.",
	  "author": "Jack Buck"
	},
	{
	  "quote": "Progress always involves risks. You can't steal second base and keep your foot on first.",
	  "author": "Frederick Wilcox"
	},
	{
	  "quote": "Each day can be one of triumph if you keep up your interests.",
	  "author": "George Matthew Adams"
	},
	{
	  "quote": "There is one thing you have got to learn about our movement. Three people are better than no people.",
	  "author": "Fannie Hamer"
	},
	{
	  "quote": "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
	  "author": "Buddha"
	},
	{
	  "quote": "They can conquer who believe they can.",
	  "author": "Virgil"
	},
	{
	  "quote": "The world has the habit of making room for the man whose actions show that he knows where he is going.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
	  "author": "Buddha"
	},
	{
	  "quote": "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
	  "author": "Jessamyn West"
	},
	{
	  "quote": "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
	  "author": "John Muir"
	},
	{
	  "quote": "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "To fly as fast as thought, you must begin by knowing that you have already arrived.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "Successful people ask better questions, and as a result, they get better answers.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Know, first, who you are, and then adorn yourself accordingly.",
	  "author": "Epictetus"
	},
	{
	  "quote": "I always wanted to be somebody, but I should have been more specific.",
	  "author": "Lily Tomlin"
	},
	{
	  "quote": "To enjoy life, we must touch much of it lightly.",
	  "author": "Voltaire"
	},
	{
	  "quote": "We do what we do because we believe.",
	  "author": ""
	},
	{
	  "quote": "Learn to listen. Opportunity could be knocking at your door very softly.",
	  "author": "Frank Tyger"
	},
	{
	  "quote": "All action results from thought, so it is thoughts that matter.",
	  "author": "Sai Baba"
	},
	{
	  "quote": "As we risk ourselves, we grow. Each new experience is a risk.",
	  "author": "Fran Watson"
	},
	{
	  "quote": "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "The cure for boredom is curiosity. There is no cure for curiosity.",
	  "author": "Ellen Parr"
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "There is nothing so useless as doing efficiently that which should not be done at all.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Rather than wishing for change, you first must be prepared to change.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "You'll see it when you believe it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Everyone smiles in the same language.",
	  "author": ""
	},
	{
	  "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "Be faithful in small things because it is in them that your strength lies.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "There is only one success � to be able to spend your life in your own way.",
	  "author": "Christopher Morley"
	},
	{
	  "quote": "Yesterdays home runs don't win today's games.",
	  "author": "Babe Ruth"
	},
	{
	  "quote": "Letting go isn�t the end of the world; it�s the beginning of a new life.",
	  "author": ""
	},
	{
	  "quote": "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
	  "author": "Henri-Frederic Amiel"
	},
	{
	  "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
	  "author": "William White"
	},
	{
	  "quote": "I love my past. I love my present. Im not ashamed of what Ive had, and Im not sad because I have it no longer.",
	  "author": "Colette"
	},
	{
	  "quote": "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
	  "author": "Herbert Swope"
	},
	{
	  "quote": "Just as much as we see in others we have in ourselves.",
	  "author": "William Hazlitt"
	},
	{
	  "quote": "Prosperity depends more on wanting what you have than having what you want.",
	  "author": "Geoffrey F. Abert"
	},
	{
	  "quote": "Stay committed to your decisions, but stay flexible in your approach.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "How many cares one loses when one decides not to be something but to be someone.",
	  "author": "Coco Chanel"
	},
	{
	  "quote": "The most successful people are those who are good at plan B.",
	  "author": "James Yorke"
	},
	{
	  "quote": "He who knows, does not speak. He who speaks, does not know.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
	  "author": "Buckminster Fuller"
	},
	{
	  "quote": "We cannot direct the wind but we can adjust the sails.",
	  "author": ""
	},
	{
	  "quote": "He who conquers others is strong; He who conquers himself is mighty.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
	  "author": "William Penn"
	},
	{
	  "quote": "Life is a process. We are a process. The universe is a process.",
	  "author": "Anne Schaef"
	},
	{
	  "quote": "One may say the eternal mystery of the world is its comprehensibility.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
	  "author": ""
	},
	{
	  "quote": "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "The self is not something ready-made, but something in continuous formation through choice of action.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Once you choose hope, anythings possible.",
	  "author": "Christopher Reeve"
	},
	{
	  "quote": "Everything is perfect in the universe � even your desire to improve it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "Real magic in relationships means an absence of judgement of others.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
	  "author": "Anatole France"
	},
	{
	  "quote": "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
	  "author": "Jamie Paolinetti"
	},
	{
	  "quote": "Yesterdays home runs don't win today's games.",
	  "author": "Babe Ruth"
	},
	{
	  "quote": "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "The noblest worship is to make yourself as good and as just as you can.",
	  "author": "Isocrates"
	},
	{
	  "quote": "Allow the world to live as it chooses, and allow yourself to live as you choose.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Wherever you go, go with all your heart.",
	  "author": "Confucius"
	},
	{
	  "quote": "Nothing is at last sacred but the integrity of your own mind.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Moments of complete apathy are the best for new creations.",
	  "author": "Philip Breedveld"
	},
	{
	  "quote": "The only real mistake is the one from which we learn nothing.",
	  "author": "John Powell"
	},
	{
	  "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "To dream of the person you would like to be is to waste the person you are.",
	  "author": "Tim Menchen"
	},
	{
	  "quote": "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
	  "author": "Vernon Cooper"
	},
	{
	  "quote": "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "You are the only person on earth who can use your ability.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
	  "author": "Buddha"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
	  "author": ""
	},
	{
	  "quote": "All serious daring starts from within.",
	  "author": "Harriet Beecher Stowe"
	},
	{
	  "quote": "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
	  "author": "Charles Dubois"
	},
	{
	  "quote": "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
	  "author": "Cicero"
	},
	{
	  "quote": "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today.",
	  "author": "Lama Yeshe"
	},
	{
	  "quote": "The universe is transformation; our life is what our thoughts make it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Do good by stealth, and blush to find it fame.",
	  "author": "Alexander Pope"
	},
	{
	  "quote": "Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Things do not change; we change.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "Excellence is not a skill. It is an attitude.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "We must learn our limits. We are all something, but none of us are everything.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "You have to think anyway, so why not think big?",
	  "author": "Donald Trump"
	},
	{
	  "quote": "The harder you fall, the higher you bounce.",
	  "author": ""
	},
	{
	  "quote": "Always seek out the seed of triumph in every adversity.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "To be upset over what you don't have is to waste what you do have.",
	  "author": "Ken S. Keyes"
	},
	{
	  "quote": "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Yesterdays home runs don't win today's games.",
	  "author": "Babe Ruth"
	},
	{
	  "quote": "Happiness does not come from having much, but from being attached to little.",
	  "author": "Cheng Yen"
	},
	{
	  "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
	  "author": "Rumi"
	},
	{
	  "quote": "Act as if what you do makes a difference. It does.",
	  "author": "William James"
	},
	{
	  "quote": "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
	  "author": "Stephen Sigmund"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
	  "author": "Charles R. Swindoll"
	},
	{
	  "quote": "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "The poor man is not he who is without a cent, but he who is without a dream.",
	  "author": "Harry Kemp"
	},
	{
	  "quote": "All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "Be a good listener. Your ears will never get you in trouble.",
	  "author": "Frank Tyger"
	},
	{
	  "quote": "Every day may not be good, but there's something good in every day.",
	  "author": ""
	},
	{
	  "quote": "Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.",
	  "author": "Buddha"
	},
	{
	  "quote": "The heart has eyes which the brain knows nothing of.",
	  "author": "Charles Perkhurst"
	},
	{
	  "quote": "What we see is mainly what we look for.",
	  "author": ""
	},
	{
	  "quote": "It is impossible to feel grateful and depressed in the same moment.",
	  "author": "Naomi Williams"
	},
	{
	  "quote": "You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.",
	  "author": "Anatole France"
	},
	{
	  "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "The best place to find a helping hand is at the end of your own arm.",
	  "author": ""
	},
	{
	  "quote": "The worst bankrupt in the world is the person who has lost his enthusiasm.",
	  "author": "H. W. Arnold"
	},
	{
	  "quote": "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
	  "author": "Mortimer Adler"
	},
	{
	  "quote": "Strong beliefs win strong men, and then make them stronger.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
	  "author": "Tryon Edwards"
	},
	{
	  "quote": "I cannot always control what goes on outside. But I can always control what goes on inside.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "In order to win, you must expect to win.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "Opportunity is missed by most because it is dressed in overalls and looks like work.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Give thanks for the rain of life that propels us to reach new horizons.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "A beautiful thing is never perfect.",
	  "author": ""
	},
	{
	  "quote": "You give before you get.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "There are no failures. Just experiences and your reactions to them.",
	  "author": "Tom Krause"
	},
	{
	  "quote": "As we grow as unique persons, we learn to respect the uniqueness of others.",
	  "author": "Robert Schuller"
	},
	{
	  "quote": "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "The self is not something ready-made, but something in continuous formation through choice of action.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
	  "author": ""
	},
	{
	  "quote": "To listen well is as powerful a means of communication and influence as to talk well.",
	  "author": "John Marshall"
	},
	{
	  "quote": "Imagination is the living power and prime agent of all human perception.",
	  "author": "Samuel Taylor Coleridge"
	},
	{
	  "quote": "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
	  "author": ""
	},
	{
	  "quote": "You only lose what you cling to.",
	  "author": "Buddha"
	},
	{
	  "quote": "There is only one happiness in life, to love and be loved.",
	  "author": "George Sand"
	},
	{
	  "quote": "Happiness is found in doing, not merely possessing.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.",
	  "author": "Matt Zotti"
	},
	{
	  "quote": "He who is contented is rich.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "You are always free to change your mind and choose a different future, or a different past.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Reason and free inquiry are the only effectual agents against error.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "Moments of complete apathy are the best for new creations.",
	  "author": "Philip Breedveld"
	},
	{
	  "quote": "We don't stop playing because we grow old; we grow old because we stop playing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "You can't choose up sides on a round world.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The best cure for the body is a quiet mind.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the universe.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "By believing passionately in something that does not yet exist, we create it.",
	  "author": "Nikos Kazantzakis"
	},
	{
	  "quote": "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.",
	  "author": "Anne Lindbergh"
	},
	{
	  "quote": "You got to be careful if you don't know where you're going, because you might not get there.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "See the positive side, the potential, and make an effort.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "By accepting yourself and being fully what you are, your presence can make others happy.",
	  "author": "Jane Roberts"
	},
	{
	  "quote": "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
	  "author": "Norman Cousins"
	},
	{
	  "quote": "The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "If you don't know where you are going, you will probably end up somewhere else.",
	  "author": "Lawrence Peter"
	},
	{
	  "quote": "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
	  "author": "Everett Dirksen"
	},
	{
	  "quote": "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
	  "author": "Alfred Tennyson"
	},
	{
	  "quote": "Life is movement-we breathe, we eat, we walk, we move!",
	  "author": "John Pierrakos"
	},
	{
	  "quote": "Your work is to discover your world and then with all your heart give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "You cannot be lonely if you like the person you're alone with.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The place to improve the world is first in one's own heart and head and hands.",
	  "author": "Robert M. Pirsig"
	},
	{
	  "quote": "Why worry about tomorrow, when today is all we have?",
	  "author": ""
	},
	{
	  "quote": "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
	  "author": "A. A. Milne"
	},
	{
	  "quote": "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
	  "author": "Elisabeth Kubler-Ross"
	},
	{
	  "quote": "To be what we are, and to become what we are capable of becoming, is the only end of life.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "We know the truth, not only by the reason, but by the heart.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Fame usually comes to those who are thinking about something else.",
	  "author": "Holmes"
	},
	{
	  "quote": "The truest wisdom is a resolute determination.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Never, never, never give up.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "The best thing in every noble dream is the dreamer...",
	  "author": "Moncure Conway"
	},
	{
	  "quote": "Everyone smiles in the same language.",
	  "author": ""
	},
	{
	  "quote": "If you want a thing done well, do it yourself.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Take heed: you do not find what you do not seek.",
	  "author": "English proverb"
	},
	{
	  "quote": "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
	  "author": "Confucius"
	},
	{
	  "quote": "Waste no more time arguing about what a good man should be. Be one.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
	  "author": "Buddha"
	},
	{
	  "quote": "Yesterday I dared to struggle. Today I dare to win.",
	  "author": "Bernadette Devlin"
	},
	{
	  "quote": "Be a good listener. Your ears will never get you in trouble.",
	  "author": "Frank Tyger"
	},
	{
	  "quote": "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.",
	  "author": "G. K. Chesterton"
	},
	{
	  "quote": "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.",
	  "author": "Buddha"
	},
	{
	  "quote": "Kind words do not cost much. Yet they accomplish much.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "It is not only for what we do that we are held responsible, but also for what we do not do.",
	  "author": "Moliere"
	},
	{
	  "quote": "A good teacher is like a candle � it consumes itself to light the way for others.",
	  "author": ""
	},
	{
	  "quote": "Be kind whenever possible. It is always possible.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "When fate hands us a lemon, lets try to make lemonade.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "If the stars should appear but one night every thousand years how man would marvel and adore.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
	  "author": ""
	},
	{
	  "quote": "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.",
	  "author": "Cadet Maxim"
	},
	{
	  "quote": "Go put your creed into the deed. Nor speak with double tongue.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
	  "author": "Alfred Korzybski"
	},
	{
	  "quote": "Ignorant men don't know what good they hold in their hands until they've flung it away.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Failure will never overtake me if my determination to succeed is strong enough.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
	  "author": "Jane Addams"
	},
	{
	  "quote": "While we try to teach our children all about life, our children teach us what life is all about.",
	  "author": "Angela Schwindt"
	},
	{
	  "quote": "Kind words can be short and easy to speak but their echoes are truly endless.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Things turn out best for those who make the best of the way things turn out.",
	  "author": "Jack Buck"
	},
	{
	  "quote": "Wrinkles should merely indicate where smiles have been.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Your attitude, not your aptitude, will determine your altitude.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "You can be what you want to be. You have the power within and we will help you always.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
	  "author": "Louise Hay"
	},
	{
	  "quote": "Don't be afraid to go out on a limb. That's where the fruit is.",
	  "author": "H. Jackson Browne"
	},
	{
	  "quote": "As an organizer I start from where the world is, as it is, not as I would like it to be.",
	  "author": "Saul Alinsky"
	},
	{
	  "quote": "If you can dream it, you can do it.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "Let yourself be silently drawn by the stronger pull of what you really love.",
	  "author": "Rumi"
	},
	{
	  "quote": "Where all think alike, no one thinks very much.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "The undertaking of a new action brings new strength.",
	  "author": "Richard Evans"
	},
	{
	  "quote": "What you see depends on what you're looking for.",
	  "author": ""
	},
	{
	  "quote": "Be your own hero, it's cheaper than a movie ticket.",
	  "author": "Doug Horton"
	},
	{
	  "quote": "I gave my life to become the person I am right now. Was it worth it?",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Give thanks for a little and you will find a lot.",
	  "author": "Hausa"
	},
	{
	  "quote": "Most powerful is he who has himself in his own power.",
	  "author": "Seneca"
	},
	{
	  "quote": "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
	  "author": ""
	},
	{
	  "quote": "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
	  "author": "Cicero"
	},
	{
	  "quote": "When you doubt your power, you give power to your doubt.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "You may only be someone in the world, but to someone else, you may be the world.",
	  "author": ""
	},
	{
	  "quote": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
	  "author": "Buddha"
	},
	{
	  "quote": "You block your dream when you allow your fear to grow bigger than your faith.",
	  "author": "Mary Morrissey"
	},
	{
	  "quote": "Your ability to learn faster than your competition is your only sustainable competitive advantage.",
	  "author": "Arie de Gues"
	},
	{
	  "quote": "Nobody made a greater mistake than he who did nothing because he could do only a little.",
	  "author": "Edmund Burke"
	},
	{
	  "quote": "A gem cannot be polished without friction, nor a man perfected without trials.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "The first duty of a human being is to assume the right functional relationship to society � more briefly, to find your real job, and do it.",
	  "author": "Charlotte Perkins Gilman"
	},
	{
	  "quote": "Mistakes are always forgivable, if one has the courage to admit them.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Forgiveness does not change the past, but it does enlarge the future.",
	  "author": "Paul Boese"
	},
	{
	  "quote": "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
	  "author": "Nikola Tesla"
	},
	{
	  "quote": "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
	  "author": "Charles Dubois"
	},
	{
	  "quote": "I think and that is all that I am.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
	  "author": "Charles Dickens"
	},
	{
	  "quote": "In the middle of every difficulty lies opportunity.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Fame usually comes to those who are thinking about something else.",
	  "author": "Holmes"
	},
	{
	  "quote": "If one does not know to which port is sailing, no wind is favorable.",
	  "author": "Seneca"
	},
	{
	  "quote": "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
	  "author": "Joseph Roux"
	},
	{
	  "quote": "Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Id rather regret the things that I have done than the things that I have not done.",
	  "author": "Lucille Ball"
	},
	{
	  "quote": "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The deepest craving of human nature is the need to be appreciated.",
	  "author": "William James"
	},
	{
	  "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "Love does not consist of gazing at each other, but in looking together in the same direction.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
	  "author": "Buddha"
	},
	{
	  "quote": "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
	  "author": "Margaret Mead"
	},
	{
	  "quote": "If you can dream it, you can do it.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "The odds of hitting your target go up dramatically when you aim at it.",
	  "author": "Mal Pancoast"
	},
	{
	  "quote": "Compassion and happiness are not a sign of weakness but a sign of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "I cannot make my days longer so I strive to make them better.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Fortune befriends the bold.",
	  "author": "John Dryden"
	},
	{
	  "quote": "Excellence is not a skill. It is an attitude.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "Your attitude, not your aptitude, will determine your altitude.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "One must be fond of people and trust them if one is not to make a mess of life.",
	  "author": "E. M. Forster"
	},
	{
	  "quote": "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
	  "author": "H. Bertram Lewis"
	},
	{
	  "quote": "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
	  "author": "Ovid"
	},
	{
	  "quote": "Arrogance and rudeness are training wheels on the bicycle of life � for weak people who cannot keep their balance without them.",
	  "author": "Laura Teresa Marquez"
	},
	{
	  "quote": "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "We never understand how little we need in this world until we know the loss of it.",
	  "author": "James Barrie"
	},
	{
	  "quote": "We have committed the Golden Rule to memory; let us now commit it to life.",
	  "author": "Edwin Markham"
	},
	{
	  "quote": "Obstacles are those things you see when you take your eyes off the goal.",
	  "author": "Hannah More"
	},
	{
	  "quote": "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Life is a learning experience, only if you learn.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "If you can dream it, you can do it.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "Kind words do not cost much. Yet they accomplish much.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
	  "author": "Robert Southey"
	},
	{
	  "quote": "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
	  "author": ""
	},
	{
	  "quote": "We cannot direct the wind but we can adjust the sails.",
	  "author": ""
	},
	{
	  "quote": "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "Every gift from a friend is a wish for your happiness.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "When people are like each other they tend to like each other.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Id rather regret the things that I have done than the things that I have not done.",
	  "author": "Lucille Ball"
	},
	{
	  "quote": "Sincerity is the way of Heaven. The attainment of sincerity is the way of men.",
	  "author": "Confucius"
	},
	{
	  "quote": "I always wanted to be somebody, but I should have been more specific.",
	  "author": "Lily Tomlin"
	},
	{
	  "quote": "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "You can't trust without risk but neither can you live in a cocoon.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Everything you are against weakens you. Everything you are for empowers you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "All I can say about life is, Oh God, enjoy it!",
	  "author": "Bob Newhart"
	},
	{
	  "quote": "The secret of joy in work is contained in one word � excellence. To know how to do something well is to enjoy it.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "There is only one happiness in life, to love and be loved.",
	  "author": "George Sand"
	},
	{
	  "quote": "The eye sees only what the mind is prepared to comprehend.",
	  "author": "Henri Bergson"
	},
	{
	  "quote": "Well begun is half done.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Don't think of it as failure. Think of it as time-released success.",
	  "author": "Robert Orben"
	},
	{
	  "quote": "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Try not to become a man of success, but rather try to become a man of value.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Meaning is not what you start with but what you end up with.",
	  "author": "Peter Elbow"
	},
	{
	  "quote": "Be the change that you want to see in the world.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "The most formidable weapon against errors of every kind is reason.",
	  "author": "Thomas Paine"
	},
	{
	  "quote": "I don't believe in failure. It is not failure if you enjoyed the process.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "The more you care, the stronger you can be.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "A good rest is half the work.",
	  "author": ""
	},
	{
	  "quote": "Goals are the fuel in the furnace of achievement.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "He who is contented is rich.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "God always takes the simplest way.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Just trust yourself, then you will know how to live.",
	  "author": "Goethe"
	},
	{
	  "quote": "Formula for success: under promise and over deliver.",
	  "author": "Tom Peters"
	},
	{
	  "quote": "Everything in life is luck.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "The greatest part of our happiness depends on our dispositions, not our circumstances.",
	  "author": "Martha Washington"
	},
	{
	  "quote": "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "Living at risk is jumping off the cliff and building your wings on the way down.",
	  "author": "Ray Bradbury"
	},
	{
	  "quote": "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Our intention creates our reality.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
	  "author": "Joan Didion"
	},
	{
	  "quote": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
	  "author": "George Sheehan"
	},
	{
	  "quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "A good rest is half the work.",
	  "author": ""
	},
	{
	  "quote": "You won't skid if you stay in a rut.",
	  "author": "Kin Hubbard"
	},
	{
	  "quote": "We must become the change we want to see.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "A rolling stone gathers no moss.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Change in all things is sweet.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Fame usually comes to those who are thinking about something else.",
	  "author": "Holmes"
	},
	{
	  "quote": "Setting an example is not the main means of influencing another, it is the only means.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	  "author": "Laurence J. Peter"
	},
	{
	  "quote": "We know from science that nothing in the universe exists as an isolated or independent entity.",
	  "author": "Margaret Wheatley"
	},
	{
	  "quote": "There is only one happiness in life, to love and be loved.",
	  "author": "George Sand"
	},
	{
	  "quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
	  "author": "Henry Longfellow"
	},
	{
	  "quote": "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
	  "author": "Paul Graham"
	},
	{
	  "quote": "Worry often gives a small thing a big shadow.",
	  "author": "Swedish proverb"
	},
	{
	  "quote": "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
	  "author": "Arthur Rubinstein"
	},
	{
	  "quote": "It does not matter how slowly you go as long as you do not stop.",
	  "author": "Confucius"
	},
	{
	  "quote": "Nature is a mutable cloud which is always and never the same.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "We aim above the mark to hit the mark.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Our greatest glory is not in never failing but rising everytime we fall.",
	  "author": ""
	},
	{
	  "quote": "It all depends on how we look at things, and not how they are in themselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Be like the flower, turn your face to the sun.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "He who talks more is sooner exhausted.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
	  "author": ""
	},
	{
	  "quote": "To climb steep hills requires a slow pace at first.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
	  "author": "Buddha"
	},
	{
	  "quote": "No valid plans for the future can be made by those who have no capacity for living now.",
	  "author": "Alan Watts"
	},
	{
	  "quote": "There is nothing impossible to him who will try.",
	  "author": "Alexander the Great"
	},
	{
	  "quote": "It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.",
	  "author": "Max Planck"
	},
	{
	  "quote": "Truth is generally the best vindication against slander.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "All achievements, all earned riches, have their beginning in an idea.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "To follow, without halt, one aim: There is the secret of success.",
	  "author": "Anna Pavlova"
	},
	{
	  "quote": "When the solution is simple, God is answering.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Imagination is the highest kite one can fly.",
	  "author": "Lauren Bacall"
	},
	{
	  "quote": "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The universe is transformation; our life is what our thoughts make it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "And as we let our own light shine, we unconsciously give other people permission to do the same.",
	  "author": "Nelson Mandela"
	},
	{
	  "quote": "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "What is a weed? A plant whose virtues have not yet been discovered.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
	  "author": "Stephen Sigmund"
	},
	{
	  "quote": "Those who cannot learn from history are doomed to repeat it.",
	  "author": "George Santayan"
	},
	{
	  "quote": "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Living at risk is jumping off the cliff and building your wings on the way down.",
	  "author": "Ray Bradbury"
	},
	{
	  "quote": "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Be less curious about people and more curious about ideas.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
	  "author": "Edward Young"
	},
	{
	  "quote": "Many people have gone further than they thought they could because someone else thought they could.",
	  "author": ""
	},
	{
	  "quote": "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
	  "author": "Joan Didion"
	},
	{
	  "quote": "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Speak when you are angry and you will make the best speech you will ever regret.",
	  "author": "Ambrose Bierce"
	},
	{
	  "quote": "No person is your friend who demands your silence, or denies your right to grow.",
	  "author": "Alice Walker"
	},
	{
	  "quote": "We choose our destiny in the way we treat others.",
	  "author": "Wit"
	},
	{
	  "quote": "We read the world wrong and say that it deceives us.",
	  "author": "Rabindranath Tagore"
	},
	{
	  "quote": "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "If only wed stop trying to be happy wed have a pretty good time.",
	  "author": "Edith Wharton"
	},
	{
	  "quote": "Don't cry because it's over. Smile because it happened.",
	  "author": "Dr. Seuss"
	},
	{
	  "quote": "You must do the things you think you cannot do.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "The path to success is to take massive, determined action.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
	  "author": "Sri Chinmoy"
	},
	{
	  "quote": "One may say the eternal mystery of the world is its comprehensibility.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "To be upset over what you don't have is to waste what you do have.",
	  "author": "Ken S. Keyes"
	},
	{
	  "quote": "Meaning is not what you start with but what you end up with.",
	  "author": "Peter Elbow"
	},
	{
	  "quote": "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
	  "author": "William Arthur Ward"
	},
	{
	  "quote": "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
	  "author": "Francois de La Rochefoucauld"
	},
	{
	  "quote": "Be yourself; everyone else is already taken.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
	  "author": "Etty Hillesum"
	},
	{
	  "quote": "The poor man is not he who is without a cent, but he who is without a dream.",
	  "author": "Harry Kemp"
	},
	{
	  "quote": "Loss is nothing else but change,and change is Natures delight.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "When deeds speak, words are nothing.",
	  "author": "African proverb"
	},
	{
	  "quote": "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Successful people ask better questions, and as a result, they get better answers.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
	  "author": "Confucius"
	},
	{
	  "quote": "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
	  "author": "George Allen"
	},
	{
	  "quote": "A rolling stone gathers no moss.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
	  "author": "Kathleen Norris"
	},
	{
	  "quote": "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
	  "author": "Buckminster Fuller"
	},
	{
	  "quote": "Things do not change; we change.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
	  "author": "Buckminster Fuller"
	},
	{
	  "quote": "Most of the shadows of life are caused by standing in our own sunshine.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "Know, first, who you are, and then adorn yourself accordingly.",
	  "author": "Epictetus"
	},
	{
	  "quote": "You cannot have what you do not want.",
	  "author": "John Acosta"
	},
	{
	  "quote": "I cannot make my days longer so I strive to make them better.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "Thought is the blossom; language the bud; action the fruit behind it.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Life is not measured by the breaths you take, but by its breathtaking moments.",
	  "author": "Michael Vance"
	},
	{
	  "quote": "For everything that lives is holy, life delights in life.",
	  "author": "William Blake"
	},
	{
	  "quote": "Don't smother each other. No one can grow in the shade.",
	  "author": "Leo F. Buscaglia"
	},
	{
	  "quote": "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
	  "author": "Edna Millay"
	},
	{
	  "quote": "The bird of paradise alights only upon the hand that does not grasp.",
	  "author": "John Berry"
	},
	{
	  "quote": "To be upset over what you don't have is to waste what you do have.",
	  "author": "Ken S. Keyes"
	},
	{
	  "quote": "Nothing great was ever achieved without enthusiasm.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "A thing well said will be wit in all languages.",
	  "author": "John Dryden"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "Everyone thinks of changing the world, but no one thinks of changing himself.",
	  "author": "Leo Tolstoy"
	},
	{
	  "quote": "The greatest remedy for anger is delay.",
	  "author": "Seneca"
	},
	{
	  "quote": "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
	  "author": ""
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Great acts are made up of small deeds.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "I gave my life to become the person I am right now. Was it worth it?",
	  "author": "Richard Bach"
	},
	{
	  "quote": "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "To study and not think is a waste. To think and not study is dangerous.",
	  "author": "Confucius"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Most folks are as happy as they make up their minds to be.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "What you see depends on what you're looking for.",
	  "author": ""
	},
	{
	  "quote": "If you spend too much time thinking about a thing, you'll never get it done.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Things turn out best for those who make the best of the way things turn out.",
	  "author": "Jack Buck"
	},
	{
	  "quote": "If it is not right do not do it; if it is not true do not say it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Love is the master key that opens the gates of happiness.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "What we achieve inwardly will change outer reality.",
	  "author": "Plutarch"
	},
	{
	  "quote": "The most decisive actions of our life... are most often unconsidered actions.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "If I know what love is, it is because of you.",
	  "author": "Hermann Hesse"
	},
	{
	  "quote": "Your outlook on life is a direct reflection on how much you like yourself.",
	  "author": "Lululemon"
	},
	{
	  "quote": "Nothing is softer or more flexible than water, yet nothing can resist it.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
	  "author": "Elisabeth Kubler-Ross"
	},
	{
	  "quote": "The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.",
	  "author": "Cecil B. DeMille"
	},
	{
	  "quote": "Tension is who you think you should be. Relaxation is who you are.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Friends are those rare people who ask how we are and then wait to hear the answer.",
	  "author": "Ed Cunningham"
	},
	{
	  "quote": "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "My reputation grows with every failure.",
	  "author": "George Shaw"
	},
	{
	  "quote": "We know what we are, but know not what we may be.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Time is the wisest counsellor of all.",
	  "author": "Pericles"
	},
	{
	  "quote": "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Good thoughts are no better than good dreams, unless they be executed.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
	  "author": "Alfred Adler"
	},
	{
	  "quote": "Success is getting what you want. Happiness is wanting what you get.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
	  "author": ""
	},
	{
	  "quote": "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "The only real failure in life is not to be true to the best one knows.",
	  "author": "Buddha"
	},
	{
	  "quote": "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Skill to do comes of doing.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "As we risk ourselves, we grow. Each new experience is a risk.",
	  "author": "Fran Watson"
	},
	{
	  "quote": "Be slow of tongue and quick of eye.",
	  "author": "Cervantes"
	},
	{
	  "quote": "I always wanted to be somebody, but I should have been more specific.",
	  "author": "Lily Tomlin"
	},
	{
	  "quote": "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
	  "author": "Buddha"
	},
	{
	  "quote": "The greatest barrier to success is the fear of failure.",
	  "author": "Eriksson"
	},
	{
	  "quote": "For success, attitude is equally as important as ability.",
	  "author": "Harry Banks"
	},
	{
	  "quote": "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.",
	  "author": "James Faust"
	},
	{
	  "quote": "If you correct your mind, the rest of your life will fall into place.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
	  "author": "George Bernard Shaw"
	},
	{
	  "quote": "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
	  "author": "Buckminster Fuller"
	},
	{
	  "quote": "Your work is to discover your work and then with all your heart to give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "Knowledge rests not upon truth alone, but upon error also.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
	  "author": ""
	},
	{
	  "quote": "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
	  "author": "Morris West"
	},
	{
	  "quote": "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
	  "author": "Colin Powell"
	},
	{
	  "quote": "You can observe a lot just by watching.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "Failure will never overtake me if my determination to succeed is strong enough.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "The man who trusts men will make fewer mistakes than he who distrusts them.",
	  "author": "Cavour"
	},
	{
	  "quote": "To get something you never had, you have to do something you never did.",
	  "author": ""
	},
	{
	  "quote": "A person who never made a mistake never tried anything new.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Your work is to discover your world and then with all your heart give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "Better than a thousand hollow words is one word that brings peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding of ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
	  "author": ""
	},
	{
	  "quote": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
	  "author": "Buddha"
	},
	{
	  "quote": "The possibilities are numerous once we decide to act and not react.",
	  "author": "George Bernard Shaw"
	},
	{
	  "quote": "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.",
	  "author": "Vincent Lombardi"
	},
	{
	  "quote": "When fate hands us a lemon, lets try to make lemonade.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "We can only learn to love by loving.",
	  "author": "Iris Murdoch"
	},
	{
	  "quote": "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Fine words and an insinuating appearance are seldom associated with true virtue",
	  "author": "Confucius"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Self-trust is the first secret of success.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "In the depth of winter, I finally learned that there was within me an invincible summer.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "Through perseverance many people win success out of what seemed destined to be certain failure.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "To be wrong is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Don't compromise yourself. You are all you've got.",
	  "author": "Janis Joplin"
	},
	{
	  "quote": "Never ignore a gut feeling, but never believe that it's enough.",
	  "author": "Robert Heller"
	},
	{
	  "quote": "Well done is better than well said.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "Almost everything comes from nothing.",
	  "author": "Henri Amiel"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "He who is contented is rich.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Where all think alike, no one thinks very much.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "The world is round and the place which may seem like the end may also be the beginning.",
	  "author": "Ivy Baker Priest"
	},
	{
	  "quote": "I never think of the future. It comes soon enough.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Sometimes by losing a battle you find a new way to win the war.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
	  "author": "Douglas Adams"
	},
	{
	  "quote": "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
	  "author": "George Allen"
	},
	{
	  "quote": "Listen to what you know instead of what you fear.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
	  "author": "John Astin"
	},
	{
	  "quote": "One secret of success in life is for a man to be ready for his opportunity when it comes.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "You cannot step twice into the same river, for other waters are continually flowing in.",
	  "author": "Heraclitus"
	},
	{
	  "quote": "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "It is easier to live through someone else than to become complete yourself.",
	  "author": "Betty Friedan"
	},
	{
	  "quote": "When you doubt your power, you give power to your doubt.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
	  "author": "Danilo Dolci"
	},
	{
	  "quote": "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
	  "author": "John Simone"
	},
	{
	  "quote": "You can be what you want to be. You have the power within and we will help you always.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
	  "author": "H. Bertram Lewis"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "The greatest obstacle to connecting with our joy is resentment.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Remember that failure is an event, not a person.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "Why worry about tomorrow, when today is all we have?",
	  "author": ""
	},
	{
	  "quote": "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "From little acorns mighty oaks do grow.",
	  "author": "American proverb"
	},
	{
	  "quote": "You might well remember that nothing can bring you success but yourself.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Don't settle for a relationship that won't let you be yourself.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Wherever a man turns he can find someone who needs him.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Not what we have but what we enjoy constitutes our abundance.",
	  "author": "John Petit-Senn"
	},
	{
	  "quote": "As you think, so shall you become.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "God has given you one face, and you make yourself another.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Bite off more than you can chew, then chew it.",
	  "author": "Ella Williams"
	},
	{
	  "quote": "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "The only limit to your impact is your imagination and commitment.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Nothing diminishes anxiety faster than action.",
	  "author": "Walter Anderson"
	},
	{
	  "quote": "What the caterpillar calls the end of the world, the master calls a butterfly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "A smile is a light in the window of your face to show your heart is at home.",
	  "author": ""
	},
	{
	  "quote": "You might well remember that nothing can bring you success but yourself.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "If you do what you've always done, you'll get what youve always gotten.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "To dare is to lose ones footing momentarily. To not dare is to lose oneself.",
	  "author": "Soren Kierkegaard"
	},
	{
	  "quote": "Memory is the mother of all wisdom.",
	  "author": "Samuel Johnson"
	},
	{
	  "quote": "Make the best use of what is in your power, and take the rest as it happens.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Freedom is what you do with what's been done to you.",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "Do not wait for leaders; do it alone, person to person.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Knowledge has three degrees � opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
	  "author": "Plotinus"
	},
	{
	  "quote": "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
	  "author": "Paavo Nurmi"
	},
	{
	  "quote": "Never ignore a gut feeling, but never believe that it's enough.",
	  "author": "Robert Heller"
	},
	{
	  "quote": "The price of greatness is responsibility.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "You don't drown by falling in water. You drown by staying there.",
	  "author": ""
	},
	{
	  "quote": "Obstacles are those things you see when you take your eyes off the goal.",
	  "author": "Hannah More"
	},
	{
	  "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
	  "author": "Harriet Tubman"
	},
	{
	  "quote": "Don't talk about what you have done or what you are going to do.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "Everything in life is luck.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.",
	  "author": "Mary Parrish"
	},
	{
	  "quote": "Letting go isn�t the end of the world; it�s the beginning of a new life.",
	  "author": ""
	},
	{
	  "quote": "Science is organized knowledge. Wisdom is organized life.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "I'm not afraid of storms, for Im learning how to sail my ship.",
	  "author": "Louisa Alcott"
	},
	{
	  "quote": "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "It is fatal to enter any war without the will to win it.",
	  "author": "General Douglas MacArthur"
	},
	{
	  "quote": "Life is just a chance to grow a soul.",
	  "author": "A. Powell Davies"
	},
	{
	  "quote": "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.",
	  "author": "Katherine Mansfield"
	},
	{
	  "quote": "You can observe a lot just by watching.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "We never live; we are always in the expectation of living.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Think like a man of action; act like a man of thought.",
	  "author": "Henri L. Bergson"
	},
	{
	  "quote": "The beginning is always today.",
	  "author": "Mary Wollstonecraft"
	},
	{
	  "quote": "The universe is transformation; our life is what our thoughts make it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "You can complain because roses have thorns, or you can rejoice because thorns have roses.",
	  "author": "Ziggy"
	},
	{
	  "quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "There is not one big cosmic meaning for all, there is only the meaning we each give to our life.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Well done is better than well said.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "I always wanted to be somebody, but I should have been more specific.",
	  "author": "Lily Tomlin"
	},
	{
	  "quote": "Always do your best. What you plant now, you will harvest later.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "If it is not right do not do it; if it is not true do not say it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
	  "author": "Theodore Rubin"
	},
	{
	  "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Time you enjoyed wasting was not wasted.",
	  "author": "John Lennon"
	},
	{
	  "quote": "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
	  "author": "Robert Graves"
	},
	{
	  "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
	  "author": "Rumi"
	},
	{
	  "quote": "Your big opportunity may be right where you are now.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Do something wonderful, people may imitate it.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.",
	  "author": "Confucius"
	},
	{
	  "quote": "A man's dreams are an index to his greatness.",
	  "author": "Zadok Rabinowitz"
	},
	{
	  "quote": "Everyone smiles in the same language.",
	  "author": ""
	},
	{
	  "quote": "There is no way to happiness, happiness is the way.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "We do not quit playing because we grow old, we grow old because we quit playing.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
	  "author": "Marian Edelman"
	},
	{
	  "quote": "Your body is precious. It is our vehicle for awakening. Treat it with care.",
	  "author": "Buddha"
	},
	{
	  "quote": "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
	  "author": "John Dewey"
	},
	{
	  "quote": "What you do not want done to yourself, do not do to others.",
	  "author": "Confucius"
	},
	{
	  "quote": "How many cares one loses when one decides not to be something but to be someone.",
	  "author": "Coco Chanel"
	},
	{
	  "quote": "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
	  "author": "Buddha"
	},
	{
	  "quote": "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
	  "author": ""
	},
	{
	  "quote": "Why worry about tomorrow, when today is all we have?",
	  "author": ""
	},
	{
	  "quote": "Know, first, who you are, and then adorn yourself accordingly.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Try and fail, but don't fail to try.",
	  "author": "Stephen Kaggwa"
	},
	{
	  "quote": "The first duty of a human being is to assume the right functional relationship to society � more briefly, to find your real job, and do it.",
	  "author": "Charlotte Perkins Gilman"
	},
	{
	  "quote": "Your big opportunity may be right where you are now.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "I believe that we are fundamentally the same and have the same basic potential.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Intuition will tell the thinking mind where to look next.",
	  "author": "Jonas Salk"
	},
	{
	  "quote": "Our intention creates our reality.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
	  "author": "J. Willard Marriott"
	},
	{
	  "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
	  "author": "Rumi"
	},
	{
	  "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
	  "author": "Laozi"
	},
	{
	  "quote": "Strong beliefs win strong men, and then make them stronger.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The smallest act of kindness is worth more than the grandest intention.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
	  "author": "Vince Lombardi"
	},
	{
	  "quote": "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
	  "author": "Harriet Lerner"
	},
	{
	  "quote": "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Be thankful when you don't know something for it gives you the opportunity to learn.",
	  "author": ""
	},
	{
	  "quote": "Ignorance never settle a question.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
	  "author": "William Lyon Phelps"
	},
	{
	  "quote": "Set your goals high, and don't stop till you get there.",
	  "author": "Bo Jackson"
	},
	{
	  "quote": "Whoever is happy will make others happy, too.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
	  "author": "G. K. Chesterton"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "To follow, without halt, one aim: There is the secret of success.",
	  "author": "Anna Pavlova"
	},
	{
	  "quote": "A stumble may prevent a fall.",
	  "author": ""
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "God has given you one face, and you make yourself another.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "You teach best what you most need to learn.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "Compassion and happiness are not a sign of weakness but a sign of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
	  "author": "Buddha"
	},
	{
	  "quote": "Watch the little things; a small leak will sink a great ship.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Continuous effort�not strength or intelligence�is the key to unlocking our potential.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "We must learn our limits. We are all something, but none of us are everything.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Obstacles are those frightful things you see when you take your eyes off your goal.",
	  "author": "Henry Ford"
	},
	{
	  "quote": "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
	  "author": "Margaret Cousins"
	},
	{
	  "quote": "Be yourself; everyone else is already taken.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "Kindness is the language which the deaf can hear and the blind can see.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "To be tested is good. The challenged life may be the best therapist.",
	  "author": "Gail Sheehy"
	},
	{
	  "quote": "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
	  "author": "William Londen"
	},
	{
	  "quote": "Sooner or later, those who win are those who think they can.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "Fortune favours the brave.",
	  "author": "Virgil"
	},
	{
	  "quote": "The heart has its reasons which reason knows not of.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Go for it now. The future is promised to no one.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "When you doubt your power, you give power to your doubt.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing.",
	  "author": "John Holmes"
	},
	{
	  "quote": "Every action of our lives touches on some chord that will vibrate in eternity.",
	  "author": "Edwin Chapin"
	},
	{
	  "quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "Don't let what you can't do stop you from doing what you can do.",
	  "author": ""
	},
	{
	  "quote": "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
	  "author": "Doug Larson"
	},
	{
	  "quote": "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
	  "author": "Buddha"
	},
	{
	  "quote": "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
	  "author": "Sam Keen"
	},
	{
	  "quote": "Being right is highly overrated. Even a stopped clock is right twice a day.",
	  "author": ""
	},
	{
	  "quote": "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
	  "author": "William Londen"
	},
	{
	  "quote": "It is one of the blessings of old friends that you can afford to be stupid with them.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
	  "author": "Buddha"
	},
	{
	  "quote": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
	  "author": "Hannah Arendt"
	},
	{
	  "quote": "Our passion is our strength.",
	  "author": "Billie Armstrong"
	},
	{
	  "quote": "Learning is a treasure that will follow its owner everywhere",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "The best way to pay for a lovely moment is to enjoy it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Loss is nothing else but change,and change is Natures delight.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Maxim for life: You get treated in life the way you teach people to treat you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Whatever happens, take responsibility.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "Don't turn away from possible futures before you're certain you don't have anything to learn from them.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "A single conversation across the table with a wise person is worth a months study of books.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "We must not say every mistake is a foolish one.",
	  "author": "Cicero"
	},
	{
	  "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "The day always looks brighter from behind a smile.",
	  "author": ""
	},
	{
	  "quote": "Allow the world to live as it chooses, and allow yourself to live as you choose.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "From small beginnings come great things.",
	  "author": ""
	},
	{
	  "quote": "One secret of success in life is for a man to be ready for his opportunity when it comes.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "If we look at the world with a love of life, the world will reveal its beauty to us.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Open minds lead to open doors.",
	  "author": ""
	},
	{
	  "quote": "The most important point is to accept yourself and stand on your two feet.",
	  "author": "Shunryu Suzuki"
	},
	{
	  "quote": "In skating over thin ice our safety is in our speed.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The self is not something ready-made, but something in continuous formation through choice of action.",
	  "author": "John Dewey"
	},
	{
	  "quote": "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
	  "author": "W. Clement Stone"
	},
	{
	  "quote": "Happiness is the reward we get for living to the highest right we know.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "To want to be what one can be is purpose in life.",
	  "author": "Cynthia Ozick"
	},
	{
	  "quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
	  "author": ""
	},
	{
	  "quote": "Creativity comes from trust. Trust your instincts. And never hope more than you work.",
	  "author": "Rita Mae Brown"
	},
	{
	  "quote": "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Be faithful in small things because it is in them that your strength lies.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
	  "author": "Norman Cousins"
	},
	{
	  "quote": "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
	  "author": "Chalmers"
	},
	{
	  "quote": "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
	  "author": "David Jordan"
	},
	{
	  "quote": "Never promise more than you can perform.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "The greatest remedy for anger is delay.",
	  "author": "Seneca"
	},
	{
	  "quote": "He who fears being conquered is sure of defeat.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Everyone is a genius at least once a year. A real genius has his original ideas closer together.",
	  "author": "Georg Lichtenberg"
	},
	{
	  "quote": "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",
	  "author": "Nora Roberts"
	},
	{
	  "quote": "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
	  "author": "Mabel Newcomber"
	},
	{
	  "quote": "Do not turn back when you are just at the goal.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "A single conversation across the table with a wise person is worth a months study of books.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "When in doubt, tell the truth.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Every problem has a gift for you in its hands.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "As you think, so shall you become.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "The cautious seldom err.",
	  "author": "Confucius"
	},
	{
	  "quote": "Be less curious about people and more curious about ideas.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "As you think, so shall you become.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "The future belongs to those who believe in the beauty of their dreams.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "I can't believe that God put us on this earth to be ordinary.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "There are no limitations to the mind except those we acknowledge.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "You won't skid if you stay in a rut.",
	  "author": "Kin Hubbard"
	},
	{
	  "quote": "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
	  "author": "Eden Phillpotts"
	},
	{
	  "quote": "Ignorance never settle a question.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "To fly, we have to have resistance.",
	  "author": "Maya Lin"
	},
	{
	  "quote": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Things do not change; we change.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "We never understand how little we need in this world until we know the loss of it.",
	  "author": "James Barrie"
	},
	{
	  "quote": "He who angers you conquers you.",
	  "author": "Elizabeth Kenny"
	},
	{
	  "quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.",
	  "author": "Babatunde Olatunji"
	},
	{
	  "quote": "Don't think of it as failure. Think of it as time-released success.",
	  "author": "Robert Orben"
	},
	{
	  "quote": "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "The exercise of an extraordinary gift is the supremest pleasure in life.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "It is through science that we prove, but through intuition that we discover.",
	  "author": "Jules Poincare"
	},
	{
	  "quote": "Every problem has a gift for you in its hands.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "The future is completely open, and we are writing it moment to moment.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Nothing in life is to be feared. It is only to be understood.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "If someone in your life talked to you the way you talk to yourself, you would have left them long ago.",
	  "author": "Carla Gordon"
	},
	{
	  "quote": "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
	  "author": "Confucius"
	},
	{
	  "quote": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.",
	  "author": "Edward Ericson"
	},
	{
	  "quote": "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.",
	  "author": "Alphonse Karr"
	},
	{
	  "quote": "Everyone smiles in the same language.",
	  "author": ""
	},
	{
	  "quote": "If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Arrogance and rudeness are training wheels on the bicycle of life � for weak people who cannot keep their balance without them.",
	  "author": "Laura Teresa Marquez"
	},
	{
	  "quote": "Well done is better than well said.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "No is easier to do. Yes is easier to say.",
	  "author": "Jason Fried"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "A failure is a man who has blundered but is not capable of cashing in on the experience.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "You can do what's reasonable or you can decide what's possible.",
	  "author": ""
	},
	{
	  "quote": "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.",
	  "author": "Uta Hagen"
	},
	{
	  "quote": "There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.",
	  "author": "Linda Hogan"
	},
	{
	  "quote": "He who fears being conquered is sure of defeat.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "To listen well is as powerful a means of communication and influence as to talk well.",
	  "author": "John Marshall"
	},
	{
	  "quote": "He who angers you conquers you.",
	  "author": "Elizabeth Kenny"
	},
	{
	  "quote": "The secret of joy in work is contained in one word � excellence. To know how to do something well is to enjoy it.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Everyone smiles in the same language.",
	  "author": ""
	},
	{
	  "quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	  "author": "Laurence J. Peter"
	},
	{
	  "quote": "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
	  "author": "Pearl Buck"
	},
	{
	  "quote": "Nobody made a greater mistake than he who did nothing because he could do only a little.",
	  "author": "Edmund Burke"
	},
	{
	  "quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "I have often regretted my speech, never my silence.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Never promise more than you can perform.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "Complaining doesn't change a thing only taking action does.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "If you think you can, you can. And if you think you can't, you're right.",
	  "author": "Henry Ford"
	},
	{
	  "quote": "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "If you wish to be a writer, write.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Never tell me the sky�s the limit when there are footprints on the moon.",
	  "author": ""
	},
	{
	  "quote": "When people are like each other they tend to like each other.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.",
	  "author": "Georg Lichtenberg"
	},
	{
	  "quote": "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
	  "author": "Honore de Balzac"
	},
	{
	  "quote": "We must not say every mistake is a foolish one.",
	  "author": "Cicero"
	},
	{
	  "quote": "The way is not in the sky. The way is in the heart.",
	  "author": "Buddha"
	},
	{
	  "quote": "Once we accept our limits, we go beyond them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
	  "author": "Richard Bach"
	},
	{
	  "quote": "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
	  "author": "Alfred Korzybski"
	},
	{
	  "quote": "Fine words and an insinuating appearance are seldom associated with true virtue",
	  "author": "Confucius"
	},
	{
	  "quote": "The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "Shoot for the moon. Even if you miss, you'll land among the stars.",
	  "author": "Les Brown"
	},
	{
	  "quote": "If the stars should appear but one night every thousand years how man would marvel and adore.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "Learning without reflection is a waste, reflection without learning is dangerous.",
	  "author": "Confucius"
	},
	{
	  "quote": "Think for yourselves and let others enjoy the privilege to do so too.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Take it easy � but take it.",
	  "author": "Woody Guthrie"
	},
	{
	  "quote": "No garden is without its weeds.",
	  "author": "Thomas Fuller"
	},
	{
	  "quote": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Life shrinks or expands in proportion to one's courage.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
	  "author": "Lisa Alther"
	},
	{
	  "quote": "The winds and waves are always on the side of the ablest navigators.",
	  "author": "Edward Gibbon"
	},
	{
	  "quote": "No yesterdays are ever wasted for those who give themselves to today.",
	  "author": "Brendan Francis"
	},
	{
	  "quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
	  "author": "Confucius"
	},
	{
	  "quote": "Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.",
	  "author": "Buddha"
	},
	{
	  "quote": "Change your words. Change your world.",
	  "author": ""
	},
	{
	  "quote": "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "You must train your intuition � you must trust the small voice inside you which tells you exactly what to say, what to decide.",
	  "author": "Ingrid Bergman"
	},
	{
	  "quote": "Study the past, if you would divine the future.",
	  "author": "Confucius"
	},
	{
	  "quote": "God has given you one face, and you make yourself another.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "The only real valuable thing is intuition.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "It is never too late to be what you might have been.",
	  "author": "George Eliot"
	},
	{
	  "quote": "People seldom notice old clothes if you wear a big smile.",
	  "author": "Lee Mildon"
	},
	{
	  "quote": "Blessed is the man who expects nothing, for he shall never be disappointed.",
	  "author": "Alexander Pope"
	},
	{
	  "quote": "What the caterpillar calls the end of the world, the master calls a butterfly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "It does not matter how slowly you go as long as you do not stop.",
	  "author": "Confucius"
	},
	{
	  "quote": "What we think, we become.",
	  "author": "Buddha"
	},
	{
	  "quote": "The foot feels the foot when it feels the ground.",
	  "author": "Buddha"
	},
	{
	  "quote": "Rainbows apologize for angry skies.",
	  "author": "Sylvia Voirol"
	},
	{
	  "quote": "Life isn't about finding yourself. Life is about creating yourself.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "He who knows others is wise. He who knows himself is enlightened.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The greatest way to live with honor in this world is to be what we pretend to be.",
	  "author": "Socrates"
	},
	{
	  "quote": "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
	  "author": "Alfred Adler"
	},
	{
	  "quote": "The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "An ant on the move does more than a dozing ox",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The journey of a thousand miles begins with one step.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "They say that time changes things, but you actually have to change them yourself.",
	  "author": "Andy Warhol"
	},
	{
	  "quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
	  "author": "Alfred Sheinwold"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "If one is lucky, a solitary fantasy can totally transform one million realities.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Once we accept our limits, we go beyond them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Strength to carry on despite the odds means you have faith in your own abilities and know how.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "And as we let our own light shine, we unconsciously give other people permission to do the same.",
	  "author": "Nelson Mandela"
	},
	{
	  "quote": "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
	  "author": "Charles Lamb"
	},
	{
	  "quote": "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
	  "author": "Keshavan Nair"
	},
	{
	  "quote": "Moments of complete apathy are the best for new creations.",
	  "author": "Philip Breedveld"
	},
	{
	  "quote": "The best way to predict your future is to create it.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "To avoid criticism, do nothing, say nothing, be nothing.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "To accomplish great things, we must dream as well as act.",
	  "author": "Anatole France"
	},
	{
	  "quote": "Fear is a darkroom where negatives develop.",
	  "author": "Usman Asif"
	},
	{
	  "quote": "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
	  "author": "Sam Keen"
	},
	{
	  "quote": "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Life is what you make of it. Always has been, always will be.",
	  "author": "Grandma Moses"
	},
	{
	  "quote": "To see things in the seed, that is genius.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
	  "author": "Rumi"
	},
	{
	  "quote": "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
	  "author": "Henry Van Dyke"
	},
	{
	  "quote": "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Whoever is happy will make others happy, too.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "It's not what happens to you, but how you react to it that matters.",
	  "author": "Epictetus"
	},
	{
	  "quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
	  "author": "Tryon Edwards"
	},
	{
	  "quote": "Anybody can make history. Only a great man can write it.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "A garden is always a series of losses set against a few triumphs, like life itself.",
	  "author": "May Sarton"
	},
	{
	  "quote": "Difficulties are things that show a person what they are.",
	  "author": "Epictetus"
	},
	{
	  "quote": "A goal without a plan is just a wish.",
	  "author": "Larry Elder"
	},
	{
	  "quote": "Life is so constructed that an event does not, cannot, will not, match the expectation.",
	  "author": "Charlotte Bronte"
	},
	{
	  "quote": "We shall never know all the good that a simple smile can do.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
	  "author": "Washington Irving"
	},
	{
	  "quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.",
	  "author": "Rachel Carson"
	},
	{
	  "quote": "The harder you fall, the higher you bounce.",
	  "author": ""
	},
	{
	  "quote": "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
	  "author": "Theodore Rubin"
	},
	{
	  "quote": "Compassion and happiness are not a sign of weakness but a sign of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Don't focus on making the right decision, focus on making the decision the right one.",
	  "author": ""
	},
	{
	  "quote": "The way is not in the sky. The way is in the heart.",
	  "author": "Buddha"
	},
	{
	  "quote": "Light tomorrow with today!",
	  "author": "Elizabeth Browning"
	},
	{
	  "quote": "Forgiveness does not change the past, but it does enlarge the future.",
	  "author": "Paul Boese"
	},
	{
	  "quote": "You won't skid if you stay in a rut.",
	  "author": "Kin Hubbard"
	},
	{
	  "quote": "Never mistake motion for action.",
	  "author": "Ernest Hemingway"
	},
	{
	  "quote": "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Your attitude, not your aptitude, will determine your altitude.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "Never bend your head. Always hold it high. Look the world right in the eye.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "A goal without a plan is just a wish.",
	  "author": "Larry Elder"
	},
	{
	  "quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
	  "author": "Confucius"
	},
	{
	  "quote": "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "I have often regretted my speech, never my silence.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
	  "author": "Hannah Senesh"
	},
	{
	  "quote": "One who is too insistent on his own views, finds few to agree with him.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "A single conversation across the table with a wise person is worth a months study of books.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Be what you are. This is the first step toward becoming better than you are.",
	  "author": "Julius Charles Hare"
	},
	{
	  "quote": "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
	  "author": "Buddha"
	},
	{
	  "quote": "Your attitude, not your aptitude, will determine your altitude.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "Ability will never catch up with the demand for it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "To be happy is to be able to become aware of oneself without fright.",
	  "author": "Walter Benjamin"
	},
	{
	  "quote": "You only lose what you cling to.",
	  "author": "Buddha"
	},
	{
	  "quote": "A weed is no more than a flower in disguise.",
	  "author": "James Lowell"
	},
	{
	  "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "The secret to a rich life is to have more beginnings than endings.",
	  "author": "Dave Weinbaum"
	},
	{
	  "quote": "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.",
	  "author": "Harry Burchell Mathews"
	},
	{
	  "quote": "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
	  "author": "Doug Larson"
	},
	{
	  "quote": "Nothing ever goes away until it has taught us what we need to know.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.",
	  "author": "David Brinkley"
	},
	{
	  "quote": "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
	  "author": "Voltaire"
	},
	{
	  "quote": "The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.",
	  "author": "George Shaw"
	},
	{
	  "quote": "Setting goals is the first step in turning the invisible into the visible.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "The universe is transformation; our life is what our thoughts make it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
	  "author": "Robert Louis Stevenson"
	},
	{
	  "quote": "Good instincts usually tell you what to do long before your head has figured it out.",
	  "author": "Michael Burke"
	},
	{
	  "quote": "Meaning is not what you start with but what you end up with.",
	  "author": "Peter Elbow"
	},
	{
	  "quote": "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
	  "author": "Charles R. Swindoll"
	},
	{
	  "quote": "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "The biggest adventure you can ever take is to live the life of your dreams.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Logic will get you from A to B. Imagination will take you everywhere.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
	  "author": "Hannah Arendt"
	},
	{
	  "quote": "A short saying oft contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Self-complacency is fatal to progress.",
	  "author": "Margaret Sangster"
	},
	{
	  "quote": "What is not started today is never finished tomorrow.",
	  "author": "Goethe"
	},
	{
	  "quote": "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Bite off more than you can chew, then chew it.",
	  "author": "Ella Williams"
	},
	{
	  "quote": "Ignorance never settle a question.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Failure will never overtake me if my determination to succeed is strong enough.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Those who dream by day are cognizant of many things which escape those who dream only by night.",
	  "author": "Edgar Allan Poe"
	},
	{
	  "quote": "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
	  "author": "Buddha"
	},
	{
	  "quote": "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "We cannot hold a torch to light another's path without brightening our own.",
	  "author": "Ben Sweetland"
	},
	{
	  "quote": "The minute you settle for less than you deserve, you get even less than you settled for.",
	  "author": "Maureen Dowd"
	},
	{
	  "quote": "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "A weed is no more than a flower in disguise.",
	  "author": "James Lowell"
	},
	{
	  "quote": "Real success is finding your lifework in the work that you love.",
	  "author": "David McCullough"
	},
	{
	  "quote": "Great talent finds happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
	  "author": "Charles R. Swindoll"
	},
	{
	  "quote": "The deepest craving of human nature is the need to be appreciated.",
	  "author": "William James"
	},
	{
	  "quote": "If you have no respect for your own values how can you be worthy of respect from others.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Where there is great love, there are always miracles.",
	  "author": "Willa Cather"
	},
	{
	  "quote": "I allow my intuition to lead my path.",
	  "author": "Manuel Puig"
	},
	{
	  "quote": "Never, never, never give up.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "From little acorns mighty oaks do grow.",
	  "author": "American proverb"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Can you imagine what I would do if I could do all I can?",
	  "author": "Sun Tzu"
	},
	{
	  "quote": "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
	  "author": "Sam Levenson"
	},
	{
	  "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
	  "author": "Laozi"
	},
	{
	  "quote": "Many people have gone further than they thought they could because someone else thought they could.",
	  "author": ""
	},
	{
	  "quote": "Keep true to the dreams of thy youth.",
	  "author": "Friedrich von Schiller"
	},
	{
	  "quote": "Happiness does not come from having much, but from being attached to little.",
	  "author": "Cheng Yen"
	},
	{
	  "quote": "Most smiles are started by another smile.",
	  "author": ""
	},
	{
	  "quote": "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.",
	  "author": "Eknath Easwaran"
	},
	{
	  "quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "If you can't explain it simply, you don't understand it well enough.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "All know the way; few actually walk it.",
	  "author": "Bodhidharma"
	},
	{
	  "quote": "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
	  "author": "Buddha"
	},
	{
	  "quote": "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Life shrinks or expands in proportion to one's courage.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Count your joys instead of your woes. Count your friends instead of your foes.",
	  "author": ""
	},
	{
	  "quote": "The cause is hidden. The effect is visible to all.",
	  "author": "Ovid"
	},
	{
	  "quote": "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
	  "author": "Lou Holtz"
	},
	{
	  "quote": "If one does not know to which port is sailing, no wind is favorable.",
	  "author": "Seneca"
	},
	{
	  "quote": "I think and that is all that I am.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Dreams come true. Without that possibility, nature would not incite us to have them.",
	  "author": "John Updike"
	},
	{
	  "quote": "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
	  "author": "Mahummad Ali"
	},
	{
	  "quote": "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
	  "author": "Hannah Senesh"
	},
	{
	  "quote": "Nothing in life is to be feared. It is only to be understood.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "If you would take, you must first give, this is the beginning of intelligence.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Positive thinking will let you do everything better than negative thinking will.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the world.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Staying in one place is the best path to be taken over and surpassed by many.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "To know oneself is to study oneself in action with another person.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
	  "author": "Buddha"
	},
	{
	  "quote": "Doing nothing is better than being busy doing nothing.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "There is not one big cosmic meaning for all, there is only the meaning we each give to our life.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
	  "author": "Naguib Mahfouz"
	},
	{
	  "quote": "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
	  "author": "Norman Schwarzkopf"
	},
	{
	  "quote": "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
	  "author": "Carl Sagan"
	},
	{
	  "quote": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Change your thoughts, change your life!",
	  "author": ""
	},
	{
	  "quote": "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
	  "author": "Old German proverb"
	},
	{
	  "quote": "All I can say about life is, Oh God, enjoy it!",
	  "author": "Bob Newhart"
	},
	{
	  "quote": "Real magic in relationships means an absence of judgement of others.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Problems are only opportunities with thorns on them.",
	  "author": "Hugh Miller"
	},
	{
	  "quote": "He who knows himself is enlightened.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The minute you settle for less than you deserve, you get even less than you settled for.",
	  "author": "Maureen Dowd"
	},
	{
	  "quote": "I think and that is all that I am.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Fortune favours the brave.",
	  "author": "Virgil"
	},
	{
	  "quote": "A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.",
	  "author": "Jawaharlal Nehru"
	},
	{
	  "quote": "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
	  "author": "Sri Chinmoy"
	},
	{
	  "quote": "The secret of success is constancy to purpose.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Absence makes the heart grow fonder.",
	  "author": "Haynes Bayly"
	},
	{
	  "quote": "The best place to find a helping hand is at the end of your own arm.",
	  "author": ""
	},
	{
	  "quote": "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "I have no special talent. I am only passionately curious.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "He who knows others is wise. He who knows himself is enlightened.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Self-complacency is fatal to progress.",
	  "author": "Margaret Sangster"
	},
	{
	  "quote": "Remember that failure is an event, not a person.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "In the middle of every difficulty lies opportunity.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
	  "author": "Mabel Newcomber"
	},
	{
	  "quote": "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
	  "author": "Buddha"
	},
	{
	  "quote": "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
	  "author": "Elizabeth Arden"
	},
	{
	  "quote": "Nothing is softer or more flexible than water, yet nothing can resist it.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Yesterday I dared to struggle. Today I dare to win.",
	  "author": "Bernadette Devlin"
	},
	{
	  "quote": "I'm a great believer in luck and I find the harder I work, the more I have of it.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
	  "author": "Confucius"
	},
	{
	  "quote": "I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.",
	  "author": "Elizabeth Montagu"
	},
	{
	  "quote": "The shoe that fits one person pinches another; there is no recipe for living that suits all cases.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "The world has the habit of making room for the man whose actions show that he knows where he is going.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "You always succeed in producing a result.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "You are the only person on earth who can use your ability.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
	  "author": "Buddha"
	},
	{
	  "quote": "To be wrong is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
	  "author": "Bertrand Russell"
	},
	{
	  "quote": "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "A man who doesn't trust himself can never really trust anyone else.",
	  "author": "Cardinal Retz"
	},
	{
	  "quote": "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
	  "author": "Amiel"
	},
	{
	  "quote": "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
	  "author": "Epictetus"
	},
	{
	  "quote": "It takes both sunshine and rain to make a rainbow.",
	  "author": ""
	},
	{
	  "quote": "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
	  "author": "Buddha"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
	  "author": "Tomas Eliot"
	},
	{
	  "quote": "Change in all things is sweet.",
	  "author": "Aristotle"
	},
	{
	  "quote": "They can do all because they think they can.",
	  "author": "Virgil"
	},
	{
	  "quote": "The two most powerful warriors are patience and time.",
	  "author": "Leo Tolstoy"
	},
	{
	  "quote": "The height of your accomplishments will equal the depth of your convictions.",
	  "author": "William Scolavino"
	},
	{
	  "quote": "If you come to a fork in the road, take it.",
	  "author": ""
	},
	{
	  "quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
	  "author": "Buddha"
	},
	{
	  "quote": "You cannot be lonely if you like the person you're alone with.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Freedom is the right to live as we wish.",
	  "author": "Epictetus"
	},
	{
	  "quote": "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
	  "author": "Norman Schwarzkopf"
	},
	{
	  "quote": "Self-complacency is fatal to progress.",
	  "author": "Margaret Sangster"
	},
	{
	  "quote": "As we are liberated from our own fear, our presence automatically liberates others.",
	  "author": "Nelson Mandela"
	},
	{
	  "quote": "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
	  "author": "Rabbi Hillel"
	},
	{
	  "quote": "It has never been my object to record my dreams, just to realize them.",
	  "author": "Man Ray"
	},
	{
	  "quote": "Wisdom begins in wonder.",
	  "author": "Socrates"
	},
	{
	  "quote": "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
	  "author": "Sogyal Rinpoche"
	},
	{
	  "quote": "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
	  "author": "Buddha"
	},
	{
	  "quote": "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
	  "author": "Audre Lorde"
	},
	{
	  "quote": "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "We know what we are, but know not what we may be.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
	  "author": "Ajahn Chah"
	},
	{
	  "quote": "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
	  "author": "Julie Morgenstern"
	},
	{
	  "quote": "What is a weed? A plant whose virtues have not yet been discovered.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "To be wronged is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "How we spend our days is, of course, how we spend our lives.",
	  "author": "Annie Dillard"
	},
	{
	  "quote": "To accomplish great things, we must dream as well as act.",
	  "author": "Anatole France"
	},
	{
	  "quote": "If we did the things we are capable of, we would astound ourselves.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "You are the only person on Earth who can use your ability.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "Success is getting what you want. Happiness is wanting what you get.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "Never idealize others. They will never live up to your expectations.",
	  "author": "Leo Buscaglia"
	},
	{
	  "quote": "I cannot always control what goes on outside. But I can always control what goes on inside.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Those who will play with cats must expect to be scratched.",
	  "author": "Cervantes"
	},
	{
	  "quote": "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "Today is the tomorrow you worried about yesterday.",
	  "author": ""
	},
	{
	  "quote": "Every gift from a friend is a wish for your happiness.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "When performance exceeds ambition, the overlap is called success.",
	  "author": "Cullen Hightower"
	},
	{
	  "quote": "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
	  "author": "William Lyon Phelps"
	},
	{
	  "quote": "We choose our destiny in the way we treat others.",
	  "author": "Wit"
	},
	{
	  "quote": "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
	  "author": "Harriet Lerner"
	},
	{
	  "quote": "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
	  "author": "W. Clement Stone"
	},
	{
	  "quote": "You won't skid if you stay in a rut.",
	  "author": "Kin Hubbard"
	},
	{
	  "quote": "To listen well is as powerful a means of communication and influence as to talk well.",
	  "author": "John Marshall"
	},
	{
	  "quote": "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
	  "author": "Everett Dirksen"
	},
	{
	  "quote": "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
	  "author": "Dhammapada"
	},
	{
	  "quote": "Well begun is half done.",
	  "author": "Aristotle"
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Set your goals high, and don't stop till you get there.",
	  "author": "Bo Jackson"
	},
	{
	  "quote": "What the caterpillar calls the end of the world, the master calls a butterfly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "An obstacle may be either a stepping stone or a stumbling block.",
	  "author": ""
	},
	{
	  "quote": "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
	  "author": "William White"
	},
	{
	  "quote": "We know from science that nothing in the universe exists as an isolated or independent entity.",
	  "author": "Margaret Wheatley"
	},
	{
	  "quote": "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "If you want to study yourself � look into the hearts of other people. If you want to study other people � look into your own heart.",
	  "author": "Friedrich von Schiller"
	},
	{
	  "quote": "Your outlook on life is a direct reflection on how much you like yourself.",
	  "author": "Lululemon"
	},
	{
	  "quote": "The place to improve the world is first in one's own heart and head and hands.",
	  "author": "Robert M. Pirsig"
	},
	{
	  "quote": "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Absence makes the heart grow fonder.",
	  "author": "Haynes Bayly"
	},
	{
	  "quote": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
	  "author": "Charles Darwin"
	},
	{
	  "quote": "Learning without reflection is a waste, reflection without learning is dangerous.",
	  "author": "Confucius"
	},
	{
	  "quote": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
	  "author": "J. Willard Marriott"
	},
	{
	  "quote": "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "A person who never made a mistake never tried anything new.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
	  "author": "Buddha"
	},
	{
	  "quote": "We must learn our limits. We are all something, but none of us are everything.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "If you get up one more time than you fall, you will make it through.",
	  "author": ""
	},
	{
	  "quote": "All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.",
	  "author": "Alexis Carrel"
	},
	{
	  "quote": "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "To get the full value of joy you must have someone to divide it with.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "We never live; we are always in the expectation of living.",
	  "author": "Voltaire"
	},
	{
	  "quote": "To be happy is to be able to become aware of oneself without fright.",
	  "author": "Walter Benjamin"
	},
	{
	  "quote": "Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "We lost because we told ourselves we lost.",
	  "author": "Leo Tolstoy"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
	  "author": "Mabel Newcomber"
	},
	{
	  "quote": "We don't stop playing because we grow old; we grow old because we stop playing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
	  "author": "Douglas Adams"
	},
	{
	  "quote": "Our passion is our strength.",
	  "author": "Billie Armstrong"
	},
	{
	  "quote": "You teach best what you most need to learn.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Worry gives a small thing a big shadow.",
	  "author": ""
	},
	{
	  "quote": "Fine words and an insinuating appearance are seldom associated with true virtue",
	  "author": "Confucius"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "No act of kindness, no matter how small, is ever wasted.",
	  "author": "Aesop"
	},
	{
	  "quote": "A man's dreams are an index to his greatness.",
	  "author": "Zadok Rabinowitz"
	},
	{
	  "quote": "If you change the way you look at things, the things you look at change.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
	  "author": "John Wooden"
	},
	{
	  "quote": "Action may not always bring happiness, but there is no happiness without action.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "In three words I can sum up everything Ive learned about life: it goes on.",
	  "author": "Robert Frost"
	},
	{
	  "quote": "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
	  "author": "Stephen Sigmund"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "Don't frown because you never know who is falling in love with your smile.",
	  "author": "Sinvyest Tan"
	},
	{
	  "quote": "Without some goals and some efforts to reach it, no man can live.",
	  "author": "John Dewey"
	},
	{
	  "quote": "He who knows, does not speak. He who speaks, does not know.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The only real valuable thing is intuition.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Do not wait for leaders; do it alone, person to person.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "As the rest of the world is walking out the door, your best friends are the ones walking in.",
	  "author": ""
	},
	{
	  "quote": "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
	  "author": "Keshavan Nair"
	},
	{
	  "quote": "Whatever happens, take responsibility.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Keep your eyes on the stars and your feet on the ground.",
	  "author": "Theodore Roosevelt"
	},
	{
	  "quote": "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
	  "author": "Robert Lynd"
	},
	{
	  "quote": "Success is determined by those whom prove the impossible, possible.",
	  "author": "James Pence"
	},
	{
	  "quote": "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
	  "author": "Charles R. Swindoll"
	},
	{
	  "quote": "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
	  "author": "Joseph Roux"
	},
	{
	  "quote": "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.",
	  "author": "G. K. Chesterton"
	},
	{
	  "quote": "Worry often gives a small thing a big shadow.",
	  "author": "Swedish proverb"
	},
	{
	  "quote": "We shall never know all the good that a simple smile can do.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "The only real failure in life is not to be true to the best one knows.",
	  "author": "Buddha"
	},
	{
	  "quote": "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Good advice is always certain to be ignored, but that's no reason not to give it.",
	  "author": "Agatha Christie"
	},
	{
	  "quote": "God has given you one face, and you make yourself another.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Wherever a man turns he can find someone who needs him.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "As the rest of the world is walking out the door, your best friends are the ones walking in.",
	  "author": ""
	},
	{
	  "quote": "The winner ain't the one with the fastest car it's the one who refuses to lose.",
	  "author": "Dale Earnhardt"
	},
	{
	  "quote": "Be thankful when you don't know something for it gives you the opportunity to learn.",
	  "author": ""
	},
	{
	  "quote": "The best way out is always through.",
	  "author": "Robert Frost"
	},
	{
	  "quote": "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
	  "author": "Sue Patton Thoele"
	},
	{
	  "quote": "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life.",
	  "author": "Robert C. Solomon"
	},
	{
	  "quote": "You are special, you are unique, you are the best!",
	  "author": "Cathy Pulsifer"
	},
	{
	  "quote": "Truth is powerful and it prevails.",
	  "author": "Sojourner Truth"
	},
	{
	  "quote": "When you learn, teach. When you get, give.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "A man's dreams are an index to his greatness.",
	  "author": "Zadok Rabinowitz"
	},
	{
	  "quote": "Efficiency is doing things right; effectiveness is doing the right things.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "Truth is powerful and it prevails.",
	  "author": "Sojourner Truth"
	},
	{
	  "quote": "Through perseverance many people win success out of what seemed destined to be certain failure.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "The wisest men follow their own direction.",
	  "author": "Euripides"
	},
	{
	  "quote": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
	  "author": "Buddha"
	},
	{
	  "quote": "Think how hard physics would be if particles could think.",
	  "author": "Murray Gell-Mann"
	},
	{
	  "quote": "Before you put on a frown, make absolutely sure there are no smiles available.",
	  "author": "Jim Beggs"
	},
	{
	  "quote": "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
	  "author": "Robert Southey"
	},
	{
	  "quote": "To follow, without halt, one aim: There is the secret of success.",
	  "author": "Anna Pavlova"
	},
	{
	  "quote": "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
	  "author": "Buddha"
	},
	{
	  "quote": "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
	  "author": "Frank Wright"
	},
	{
	  "quote": "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "If you kick a stone in anger, you'll hurt your own foot.",
	  "author": "Korean proverb"
	},
	{
	  "quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
	  "author": "Charlotte Gilman"
	},
	{
	  "quote": "Intuition will tell the thinking mind where to look next.",
	  "author": "Jonas Salk"
	},
	{
	  "quote": "No one has a finer command of language than the person who keeps his mouth shut.",
	  "author": "Sam Rayburn"
	},
	{
	  "quote": "Through perseverance many people win success out of what seemed destined to be certain failure.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
	  "author": "Hannah Senesh"
	},
	{
	  "quote": "The only person who never makes mistakes is the person who never does anything.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Before you put on a frown, make absolutely sure there are no smiles available.",
	  "author": "Jim Beggs"
	},
	{
	  "quote": "We cannot direct the wind but we can adjust the sails.",
	  "author": ""
	},
	{
	  "quote": "Ask yourself the secret of your success. Listen to your answer, and practice it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Letting go isn�t the end of the world; it�s the beginning of a new life.",
	  "author": ""
	},
	{
	  "quote": "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
	  "author": "W. Clement Stone"
	},
	{
	  "quote": "Life is what happens to you while you're busy making other plans.",
	  "author": "John Lennon"
	},
	{
	  "quote": "If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
	  "author": ""
	},
	{
	  "quote": "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "Your work is to discover your world and then with all your heart give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "When there is no enemy within, the enemies outside cannot hurt you.",
	  "author": "African proverb"
	},
	{
	  "quote": "Progress always involves risks. You can't steal second base and keep your foot on first.",
	  "author": "Frederick Wilcox"
	},
	{
	  "quote": "Don't be pushed by your problems; be led by your dreams.",
	  "author": ""
	},
	{
	  "quote": "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
	  "author": "Joyce Brothers"
	},
	{
	  "quote": "Truth is powerful and it prevails.",
	  "author": "Sojourner Truth"
	},
	{
	  "quote": "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.",
	  "author": "Jonathan Swift"
	},
	{
	  "quote": "If you wish to be a writer, write.",
	  "author": "Epictetus"
	},
	{
	  "quote": "In seed time learn, in harvest teach, in winter enjoy.",
	  "author": "William Blake"
	},
	{
	  "quote": "Take heed: you do not find what you do not seek.",
	  "author": "English proverb"
	},
	{
	  "quote": "Kindness is the language which the deaf can hear and the blind can see.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "When you realize there is nothing lacking, the whole world belongs to you.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
	  "author": "Alfred Adler"
	},
	{
	  "quote": "Knowledge rests not upon truth alone, but upon error also.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "No man was ever wise by chance.",
	  "author": "Seneca"
	},
	{
	  "quote": "If you have knowledge, let others light their candles in it.",
	  "author": "Margaret Fuller"
	},
	{
	  "quote": "To get the full value of joy you must have someone to divide it with.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "The superior man is satisfied and composed; the mean man is always full of distress.",
	  "author": "Confucius"
	},
	{
	  "quote": "It is impossible for a man to learn what he thinks he already knows.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Silence is deep as Eternity, Speech is shallow as Time.",
	  "author": "Carlyle"
	},
	{
	  "quote": "If you find yourself in a hole, the first thing to do is stop digging.",
	  "author": "Will Rogers"
	},
	{
	  "quote": "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
	  "author": "Norman Cousins"
	},
	{
	  "quote": "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
	  "author": "Confucius"
	},
	{
	  "quote": "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
	  "author": "John Steinbeck"
	},
	{
	  "quote": "I have no special talent. I am only passionately curious.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "You will not be punished for your anger, you will be punished by your anger.",
	  "author": "Buddha"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "Those who will play with cats must expect to be scratched.",
	  "author": "Cervantes"
	},
	{
	  "quote": "Action is the foundational key to all success.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
	  "author": "Mahummad Ali"
	},
	{
	  "quote": "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.",
	  "author": "Plutarch"
	},
	{
	  "quote": "To see things in the seed, that is genius.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
	  "author": "Horace"
	},
	{
	  "quote": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
	  "author": "Confucius"
	},
	{
	  "quote": "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
	  "author": "Buddha"
	},
	{
	  "quote": "Don't smother each other. No one can grow in the shade.",
	  "author": "Leo F. Buscaglia"
	},
	{
	  "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
	  "author": "Laozi"
	},
	{
	  "quote": "Sooner or later, those who win are those who think they can.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.",
	  "author": "Lee Womack"
	},
	{
	  "quote": "Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
	  "author": ""
	},
	{
	  "quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	  "author": ""
	},
	{
	  "quote": "I am always doing that which I cannot do, in order that I may learn how to do it.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
	  "author": "Joan Didion"
	},
	{
	  "quote": "He who controls others may be powerful, but he who has mastered himself is mightier still.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.",
	  "author": "Anthony Robbins"
	},
	{
	  "quote": "Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.",
	  "author": "William Menninger"
	},
	{
	  "quote": "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Goals are the fuel in the furnace of achievement.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "Through perseverance many people win success out of what seemed destined to be certain failure.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "By accepting yourself and being fully what you are, your presence can make others happy.",
	  "author": "Jane Roberts"
	},
	{
	  "quote": "A goal without a plan is just a wish.",
	  "author": "Larry Elder"
	},
	{
	  "quote": "A man of ability and the desire to accomplish something can do anything.",
	  "author": "Donald Kircher"
	},
	{
	  "quote": "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
	  "author": "Danilo Dolci"
	},
	{
	  "quote": "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Logic will get you from A to B. Imagination will take you everywhere.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "No yesterdays are ever wasted for those who give themselves to today.",
	  "author": "Brendan Francis"
	},
	{
	  "quote": "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
	  "author": "Buddha"
	},
	{
	  "quote": "Autumn is a second spring when every leaf is a flower.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "There are no failures � just experiences and your reactions to them.",
	  "author": "Tom Krause"
	},
	{
	  "quote": "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "From small beginnings come great things.",
	  "author": ""
	},
	{
	  "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "I have an everyday religion that works for me. Love yourself first, and everything else falls into line.",
	  "author": "Lucille Ball"
	},
	{
	  "quote": "Well done is better than well said.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Be sure you put your feet in the right place, then stand firm.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
	  "author": "Alfred Sheinwold"
	},
	{
	  "quote": "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
	  "author": "Chuang Tzu"
	},
	{
	  "quote": "Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.",
	  "author": "Jane Addams"
	},
	{
	  "quote": "I never worry about action, but only inaction.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "The energy of the mind is the essence of life.",
	  "author": "Aristotle"
	},
	{
	  "quote": "We all have problems. The way we solve them is what makes us different.",
	  "author": ""
	},
	{
	  "quote": "The man who trusts men will make fewer mistakes than he who distrusts them.",
	  "author": "Cavour"
	},
	{
	  "quote": "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
	  "author": "Cicero"
	},
	{
	  "quote": "To be happy is to be able to become aware of oneself without fright.",
	  "author": "Walter Benjamin"
	},
	{
	  "quote": "Failure will never overtake me if my determination to succeed is strong enough.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "In skating over thin ice our safety is in our speed.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
	  "author": "Elizabeth Arden"
	},
	{
	  "quote": "Kindness is the greatest wisdom.",
	  "author": ""
	},
	{
	  "quote": "To bring anything into your life, imagine that it's already there.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "What you give is what you get.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
	  "author": "Aristotle"
	},
	{
	  "quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
	  "author": "Charlotte Gilman"
	},
	{
	  "quote": "The secret of success is constancy to purpose.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "Our intention creates our reality.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "The best place to find a helping hand is at the end of your own arm.",
	  "author": ""
	},
	{
	  "quote": "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
	  "author": "Confucius"
	},
	{
	  "quote": "Begin, be bold, and venture to be wise.",
	  "author": "Horace"
	},
	{
	  "quote": "The first step to getting the things you want out of life is this: decide what you want.",
	  "author": "Ben Stein"
	},
	{
	  "quote": "There are people who have money and people who are rich.",
	  "author": "Coco Chanel"
	},
	{
	  "quote": "While we stop to think, we often miss our opportunity.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.",
	  "author": "Will Durant"
	},
	{
	  "quote": "You only lose what you cling to.",
	  "author": "Buddha"
	},
	{
	  "quote": "You give before you get.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Do good by stealth, and blush to find it fame.",
	  "author": "Alexander Pope"
	},
	{
	  "quote": "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Most great people have attained their greatest success just one step beyond their greatest failure.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
	  "author": "George Sheehan"
	},
	{
	  "quote": "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
	  "author": "James Freeman Clarke"
	},
	{
	  "quote": "Action will remove the doubts that theory cannot solve.",
	  "author": "Tehyi Hsieh"
	},
	{
	  "quote": "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
	  "author": ""
	},
	{
	  "quote": "Spring is a time for rebirth and the fulfilment of new life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "In the end we retain from our studies only that which we practically apply.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Only do what your heart tells you.",
	  "author": "Princess Diana"
	},
	{
	  "quote": "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "You cannot have what you do not want.",
	  "author": "John Acosta"
	},
	{
	  "quote": "Great acts are made up of small deeds.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Always seek out the seed of triumph in every adversity.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "You must welcome change as the rule but not as your ruler.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Allow the world to live as it chooses, and allow yourself to live as you choose.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "When you come to the end of your rope, tie a knot and hang on.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "The more you care, the stronger you can be.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
	  "author": "Dhammapada"
	},
	{
	  "quote": "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
	  "author": ""
	},
	{
	  "quote": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Real magic in relationships means an absence of judgement of others.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "He who knows, does not speak. He who speaks, does not know.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
	  "author": "Anatole France"
	},
	{
	  "quote": "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
	  "author": "Audre Lorde"
	},
	{
	  "quote": "Imagination is not a talent of some men but is the health of every man.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "If the shoe doesn't fit, must we change the foot?",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "To be upset over what you don't have is to waste what you do have.",
	  "author": "Ken S. Keyes"
	},
	{
	  "quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
	  "author": "Henry Longfellow"
	},
	{
	  "quote": "It is better to travel well than to arrive.",
	  "author": "Buddha"
	},
	{
	  "quote": "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Nothing is softer or more flexible than water, yet nothing can resist it.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "A smile is a light in the window of your face to show your heart is at home.",
	  "author": ""
	},
	{
	  "quote": "Time you enjoyed wasting was not wasted.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Give whatever you are doing and whoever you are with the gift of your attention.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "A wise man will make more opportunities than he finds.",
	  "author": "Francis Bacon"
	},
	{
	  "quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "Our kindness may be the most persuasive argument for that which we believe.",
	  "author": "Gordon Hinckley"
	},
	{
	  "quote": "To climb steep hills requires a slow pace at first.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Talk doesn't cook rice.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "If you light a lamp for somebody, it will also brighten your path.",
	  "author": "Buddha"
	},
	{
	  "quote": "Everything you are against weakens you. Everything you are for empowers you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "There is nothing so useless as doing efficiently that which should not be done at all.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "Everyone smiles in the same language.",
	  "author": ""
	},
	{
	  "quote": "A good rest is half the work.",
	  "author": ""
	},
	{
	  "quote": "God has given you one face, and you make yourself another.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
	  "author": ""
	},
	{
	  "quote": "Your ability to learn faster than your competition is your only sustainable competitive advantage.",
	  "author": "Arie de Gues"
	},
	{
	  "quote": "When deeds speak, words are nothing.",
	  "author": "African proverb"
	},
	{
	  "quote": "The self is not something ready-made, but something in continuous formation through choice of action.",
	  "author": "John Dewey"
	},
	{
	  "quote": "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.",
	  "author": "Billy Wilder"
	},
	{
	  "quote": "Only those who dare to fail greatly can ever achieve greatly.",
	  "author": "Robert Kennedy"
	},
	{
	  "quote": "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "Be the change that you want to see in the world.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
	  "author": "Douglas Adams"
	},
	{
	  "quote": "Smile, breathe, and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
	  "author": "Jacob Braude"
	},
	{
	  "quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
	  "author": "Tryon Edwards"
	},
	{
	  "quote": "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
	  "author": "Bernice Reagon"
	},
	{
	  "quote": "Arriving at one point is the starting point to another.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Whoever is happy will make others happy, too.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The difficulties of life are intended to make us better, not bitter.",
	  "author": ""
	},
	{
	  "quote": "Slow down and enjoy life. It's not only the scenery you miss by going too fast � you also miss the sense of where you are going and why.",
	  "author": "Eddie Cantor"
	},
	{
	  "quote": "What the caterpillar calls the end of the world, the master calls a butterfly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
	  "author": "John Muir"
	},
	{
	  "quote": "We can do no great things, only small things with great love.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
	  "author": "Paul Graham"
	},
	{
	  "quote": "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "Begin to weave and God will give you the thread.",
	  "author": "German proverb"
	},
	{
	  "quote": "Knowledge has three degrees � opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
	  "author": "Plotinus"
	},
	{
	  "quote": "Impossibilities are merely things which we have not yet learned.",
	  "author": "Charles Chesnutt"
	},
	{
	  "quote": "Don't be pushed by your problems; be led by your dreams.",
	  "author": ""
	},
	{
	  "quote": "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
	  "author": "Buddha"
	},
	{
	  "quote": "Life is what happens while you are making other plans.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Science is organized knowledge. Wisdom is organized life.",
	  "author": "Immanuel Kant"
	},
	{
	  "quote": "The greatest antidote to insecurity and the sense of fear is compassion � it brings one back to the basis of one's inner strength",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Courage is the discovery that you may not win, and trying when you know you can lose.",
	  "author": ""
	},
	{
	  "quote": "To know oneself is to study oneself in action with another person.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
	  "author": "Epictetus"
	},
	{
	  "quote": "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
	  "author": "John F. Kennedy"
	},
	{
	  "quote": "Faith in oneself is the best and safest course.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "The minute you settle for less than you deserve, you get even less than you settled for.",
	  "author": "Maureen Dowd"
	},
	{
	  "quote": "All great achievements require time.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Miracles come in moments. Be ready and willing.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "We could never learn to be brave and patient if there were only joy in the world.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "One today is worth two tomorrows.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
	  "author": "Voltaire"
	},
	{
	  "quote": "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "Be a good listener. Your ears will never get you in trouble.",
	  "author": "Frank Tyger"
	},
	{
	  "quote": "If you kick a stone in anger, you'll hurt your own foot.",
	  "author": "Korean proverb"
	},
	{
	  "quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	  "author": ""
	},
	{
	  "quote": "A stumble may prevent a fall.",
	  "author": ""
	},
	{
	  "quote": "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
	  "author": "Victoria Holt"
	},
	{
	  "quote": "Good luck is another name for tenacity of purpose.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Better than a thousand hollow words, is one word that brings peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "We should all be thankful for those people who rekindle the inner spirit.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Skill to do comes of doing.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The best place to find a helping hand is at the end of your own arm.",
	  "author": ""
	},
	{
	  "quote": "Meaning is not what you start with but what you end up with.",
	  "author": "Peter Elbow"
	},
	{
	  "quote": "Numberless are the worlds wonders, but none more wonderful than man.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Either you run the day or the day runs you.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
	  "author": "Buddha"
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "Once we accept our limits, we go beyond them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Formula for success: under promise and over deliver.",
	  "author": "Tom Peters"
	},
	{
	  "quote": "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
	  "author": "Henry Ward Beecher"
	},
	{
	  "quote": "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
	  "author": "Rabbi Hillel"
	},
	{
	  "quote": "Nothing in life is to be feared. It is only to be understood.",
	  "author": "Marie Curie"
	},
	{
	  "quote": "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Time you enjoy wasting, was not wasted.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Life isn't about finding yourself. Life is about creating yourself.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "In the depth of winter, I finally learned that there was within me an invincible summer.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "The more you care, the stronger you can be.",
	  "author": "Jim Rohn"
	},
	{
	  "quote": "Failure doesn't mean you are a failure it just means you haven't succeeded yet.",
	  "author": "Robert Schuller"
	},
	{
	  "quote": "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
	  "author": "Etty Hillesum"
	},
	{
	  "quote": "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
	  "author": "Bernice Reagon"
	},
	{
	  "quote": "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
	  "author": "Keshavan Nair"
	},
	{
	  "quote": "To want to be what one can be is purpose in life.",
	  "author": "Cynthia Ozick"
	},
	{
	  "quote": "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
	  "author": "Charles Dubois"
	},
	{
	  "quote": "Fortune befriends the bold.",
	  "author": "John Dryden"
	},
	{
	  "quote": "As we grow as unique persons, we learn to respect the uniqueness of others.",
	  "author": "Robert Schuller"
	},
	{
	  "quote": "Love is the master key that opens the gates of happiness.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "So is cheerfulness, or a good temper, the more it is spent, the more remains.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Reality leaves a lot to the imagination.",
	  "author": "John Lennon"
	},
	{
	  "quote": "A man of ability and the desire to accomplish something can do anything.",
	  "author": "Donald Kircher"
	},
	{
	  "quote": "Everything in the universe goes by indirection. There are no straight lines.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The greatest part of our happiness depends on our dispositions, not our circumstances.",
	  "author": "Martha Washington"
	},
	{
	  "quote": "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
	  "author": "Old German proverb"
	},
	{
	  "quote": "I know but one freedom and that is the freedom of the mind.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "Change your words. Change your world.",
	  "author": ""
	},
	{
	  "quote": "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The most successful people are those who are good at plan B.",
	  "author": "James Yorke"
	},
	{
	  "quote": "Luck is what happens when preparation meets opportunity.",
	  "author": "Seneca"
	},
	{
	  "quote": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
	  "author": "Charles Darwin"
	},
	{
	  "quote": "Staying in one place is the best path to be taken over and surpassed by many.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
	  "author": "Charles DeLint"
	},
	{
	  "quote": "A man should look for what is, and not for what he thinks should be.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "You are the only person on earth who can use your ability.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "You are always free to change your mind and choose a different future, or a different past.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "One must be fond of people and trust them if one is not to make a mess of life.",
	  "author": "E. M. Forster"
	},
	{
	  "quote": "The true way to render ourselves happy is to love our work and find in it our pleasure.",
	  "author": "Francoise de Motteville"
	},
	{
	  "quote": "Fortune befriends the bold.",
	  "author": "John Dryden"
	},
	{
	  "quote": "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
	  "author": "Nikola Tesla"
	},
	{
	  "quote": "Worry gives a small thing a big shadow.",
	  "author": ""
	},
	{
	  "quote": "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
	  "author": "Mary Kay Ash"
	},
	{
	  "quote": "An obstacle may be either a stepping stone or a stumbling block.",
	  "author": ""
	},
	{
	  "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "We cannot solve our problems with the same thinking we used when we created them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "I hear and I forget. I see and I remember. I do and I understand.",
	  "author": "Confucius"
	},
	{
	  "quote": "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
	  "author": "Niccolo Machiavelli"
	},
	{
	  "quote": "Difficulties are things that show a person what they are.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Nature takes away any faculty that is not used.",
	  "author": "William R. Inge"
	},
	{
	  "quote": "It is not enough to have a good mind; the main thing is to use it well.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.",
	  "author": "Madame de Stael"
	},
	{
	  "quote": "One secret of success in life is for a man to be ready for his opportunity when it comes.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "The secret of success is constancy to purpose.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "To succeed, we must first believe that we can.",
	  "author": "Michael Korda"
	},
	{
	  "quote": "When you judge another, you do not define them, you define yourself.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Be thankful when you don't know something for it gives you the opportunity to learn.",
	  "author": ""
	},
	{
	  "quote": "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
	  "author": "Robert Lynd"
	},
	{
	  "quote": "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",
	  "author": "Nora Roberts"
	},
	{
	  "quote": "When you arise in the morning, think of what a precious privilege it is to be alive � to breathe, to think, to enjoy, to love.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
	  "author": "Michelangelo"
	},
	{
	  "quote": "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "You give before you get.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Make the most of yourself for that is all there is of you.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Think for yourselves and let others enjoy the privilege to do so too.",
	  "author": "Voltaire"
	},
	{
	  "quote": "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.",
	  "author": "Buddha"
	},
	{
	  "quote": "The journey of a thousand miles begins with one step.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The least of things with a meaning is worth more in life than the greatest of things without it.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "You block your dream when you allow your fear to grow bigger than your faith.",
	  "author": "Mary Morrissey"
	},
	{
	  "quote": "I never worry about action, but only inaction.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "The final proof of greatness lies in being able to endure criticism without resentment.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "Take it easy � but take it.",
	  "author": "Woody Guthrie"
	},
	{
	  "quote": "If you want a thing done well, do it yourself.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
	  "author": "Dr. David M. Burns"
	},
	{
	  "quote": "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
	  "author": "Stephen Covey"
	},
	{
	  "quote": "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
	  "author": "Charles Dickens"
	},
	{
	  "quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
	  "author": ""
	},
	{
	  "quote": "Argue for your limitations, and sure enough they're yours.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
	  "author": "Confucius"
	},
	{
	  "quote": "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "He who deliberates fully before taking a step will spend his entire life on one leg.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Wisdom is the supreme part of happiness.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Every problem has a gift for you in its hands.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "A good plan today is better than a perfect plan tomorrow.",
	  "author": ""
	},
	{
	  "quote": "If you have knowledge, let others light their candles in it.",
	  "author": "Margaret Fuller"
	},
	{
	  "quote": "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
	  "author": "Chalmers"
	},
	{
	  "quote": "A stumble may prevent a fall.",
	  "author": ""
	},
	{
	  "quote": "He who wishes to secure the good of others, has already secured his own.",
	  "author": "Confucius"
	},
	{
	  "quote": "It is not enough to have a good mind; the main thing is to use it well.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
	  "author": "Charles R. Swindoll"
	},
	{
	  "quote": "We aim above the mark to hit the mark.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Whenever something negative happens to you, there is a deep lesson concealed within it.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "I think somehow we learn who we really are and then live with that decision.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.",
	  "author": "Confucius"
	},
	{
	  "quote": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
	  "author": "J. Willard Marriott"
	},
	{
	  "quote": "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "If one is lucky, a solitary fantasy can totally transform one million realities.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Always bear in mind that your own resolution to succeed is more important than any one thing.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Friendship isn't a big thing. It's a million little things.",
	  "author": ""
	},
	{
	  "quote": "Wise men talk because they have something to say; fools, because they have to say something.",
	  "author": "Plato"
	},
	{
	  "quote": "We don't stop playing because we grow old; we grow old because we stop playing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "The time you think you're missing, misses you too.",
	  "author": "Ymber Delecto"
	},
	{
	  "quote": "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
	  "author": "Buddha"
	},
	{
	  "quote": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "To climb steep hills requires a slow pace at first.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "If the shoe doesn't fit, must we change the foot?",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
	  "author": "Robert Louis Stevenson"
	},
	{
	  "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "Life is really simple, but we insist on making it complicated.",
	  "author": "Confucius"
	},
	{
	  "quote": "Nobody made a greater mistake than he who did nothing because he could do only a little.",
	  "author": "Edmund Burke"
	},
	{
	  "quote": "Action will remove the doubts that theory cannot solve.",
	  "author": "Tehyi Hsieh"
	},
	{
	  "quote": "The universe is made of stories, not atoms.",
	  "author": "Muriel Rukeyser"
	},
	{
	  "quote": "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
	  "author": "Keshavan Nair"
	},
	{
	  "quote": "A man is not where he lives but where he loves.",
	  "author": ""
	},
	{
	  "quote": "You can't shake hands with a clenched fist.",
	  "author": "Indira Gandhi"
	},
	{
	  "quote": "The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.",
	  "author": "Jim Bishop"
	},
	{
	  "quote": "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
	  "author": "Etty Hillesum"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to a better understanding of ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Great acts are made up of small deeds.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Many people have gone further than they thought they could because someone else thought they could.",
	  "author": ""
	},
	{
	  "quote": "The truth which has made us free will in the end make us glad also.",
	  "author": "Felix Adler"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the universe.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
	  "author": ""
	},
	{
	  "quote": "Kind words do not cost much. Yet they accomplish much.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "We do not quit playing because we grow old, we grow old because we quit playing.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "We do not quit playing because we grow old, we grow old because we quit playing.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "Take rest; a field that has rested gives a bountiful crop.",
	  "author": "Ovid"
	},
	{
	  "quote": "Doing what you love is the cornerstone of having abundance in your life.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Action may not always bring happiness; but there is no happiness without action.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Without some goals and some efforts to reach it, no man can live.",
	  "author": "John Dewey"
	},
	{
	  "quote": "Positive thinking will let you do everything better than negative thinking will.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
	  "author": "Buddha"
	},
	{
	  "quote": "We must not allow ourselves to become like the system we oppose.",
	  "author": "Bishop Desmond Tutu"
	},
	{
	  "quote": "Friends are those rare people who ask how we are and then wait to hear the answer.",
	  "author": "Ed Cunningham"
	},
	{
	  "quote": "The most formidable weapon against errors of every kind is reason.",
	  "author": "Thomas Paine"
	},
	{
	  "quote": "I am always doing that which I can not do, in order that I may learn how to do it.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "In order to win, you must expect to win.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
	  "author": ""
	},
	{
	  "quote": "Learn to listen. Opportunity could be knocking at your door very softly.",
	  "author": "Frank Tyger"
	},
	{
	  "quote": "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "A weed is no more than a flower in disguise.",
	  "author": "James Lowell"
	},
	{
	  "quote": "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "Beware of the half truth. You may have gotten hold of the wrong half.",
	  "author": ""
	},
	{
	  "quote": "At the center of your being you have the answer; you know who you are and you know what you want.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Imagination rules the world.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "The only real mistake is the one from which we learn nothing.",
	  "author": "John Powell"
	},
	{
	  "quote": "Most folks are about as happy as they make up their minds to be.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "If you can't feed a hundred people, then feed just one.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "The heart has its reasons which reason knows not of.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "Sincerity is the way of Heaven. The attainment of sincerity is the way of men.",
	  "author": "Confucius"
	},
	{
	  "quote": "Be as you wish to seem.",
	  "author": "Socrates"
	},
	{
	  "quote": "The greatest mistake you can make in life is to be continually fearing you will make one.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Wicked people are always surprised to find ability in those that are good.",
	  "author": "Marquis Vauvenargues"
	},
	{
	  "quote": "Do what you can. Want what you have. Be who you are.",
	  "author": "Forrest Church"
	},
	{
	  "quote": "The less effort, the faster and more powerful you will be.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "The free man is he who does not fear to go to the end of his thought.",
	  "author": "Leon Blum"
	},
	{
	  "quote": "People seldom notice old clothes if you wear a big smile.",
	  "author": "Lee Mildon"
	},
	{
	  "quote": "Rainbows apologize for angry skies.",
	  "author": "Sylvia Voirol"
	},
	{
	  "quote": "People may doubt what you say, but they will believe what you do.",
	  "author": "Lewis Cass"
	},
	{
	  "quote": "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
	  "author": "Rudolf Arnheim"
	},
	{
	  "quote": "Never idealize others. They will never live up to your expectations.",
	  "author": "Leo Buscaglia"
	},
	{
	  "quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "No act of kindness, no matter how small, is ever wasted.",
	  "author": "Aesop"
	},
	{
	  "quote": "The best cure for the body is a quiet mind.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Listen to your intuition. It will tell you everything you need to know.",
	  "author": "Anthony D'Angelo"
	},
	{
	  "quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "Nothing is softer or more flexible than water, yet nothing can resist it.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "What the caterpillar calls the end of the world, the master calls a butterfly.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.",
	  "author": "Harry Burchell Mathews"
	},
	{
	  "quote": "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
	  "author": "Margaret Smith"
	},
	{
	  "quote": "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "A really great talent finds its happiness in execution.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
	  "author": "Hannah Arendt"
	},
	{
	  "quote": "If you can dream it, you can do it.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
	  "author": "Sophocles"
	},
	{
	  "quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
	  "author": "Charlotte Gilman"
	},
	{
	  "quote": "In the depth of winter, I finally learned that there was within me an invincible summer.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "A man sees in the world what he carries in his heart.",
	  "author": "Goethe"
	},
	{
	  "quote": "As we risk ourselves, we grow. Each new experience is a risk.",
	  "author": "Fran Watson"
	},
	{
	  "quote": "I have never been hurt by anything I didn't say.",
	  "author": "Calvin Coolidge"
	},
	{
	  "quote": "The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.",
	  "author": "Anais Nin"
	},
	{
	  "quote": "Real success is finding your lifework in the work that you love.",
	  "author": "David McCullough"
	},
	{
	  "quote": "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.",
	  "author": "Thomas Kempis"
	},
	{
	  "quote": "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
	  "author": "Ralph Blum"
	},
	{
	  "quote": "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.",
	  "author": "Alan Cohen"
	},
	{
	  "quote": "Sadness flies away on the wings of time.",
	  "author": "Jean de la Fontaine"
	},
	{
	  "quote": "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "Why worry about tomorrow, when today is all we have?",
	  "author": ""
	},
	{
	  "quote": "As you think, so shall you become.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Most smiles are started by another smile.",
	  "author": ""
	},
	{
	  "quote": "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "A man who doesn't trust himself can never really trust anyone else.",
	  "author": "Cardinal Retz"
	},
	{
	  "quote": "Adversity causes some men to break, others to break records.",
	  "author": "William Ward"
	},
	{
	  "quote": "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Just trust yourself, then you will know how to live.",
	  "author": "Goethe"
	},
	{
	  "quote": "Whenever something negative happens to you, there is a deep lesson concealed within it.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
	  "author": "Robert Southey"
	},
	{
	  "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
	  "author": "Aristotle"
	},
	{
	  "quote": "The greatest mistake you can make in life is to be continually fearing you will make one.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "A short saying oft contains much wisdom.",
	  "author": "Sophocles"
	},
	{
	  "quote": "The superior man is modest in his speech, but exceeds in his actions.",
	  "author": "Confucius"
	},
	{
	  "quote": "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
	  "author": "Sarah Breathnach"
	},
	{
	  "quote": "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
	  "author": "Confucius"
	},
	{
	  "quote": "Your work is to discover your world and then with all your heart give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Change your words. Change your world.",
	  "author": ""
	},
	{
	  "quote": "Take it easy � but take it.",
	  "author": "Woody Guthrie"
	},
	{
	  "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "The universe is transformation; our life is what our thoughts make it.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "Be your own hero, it's cheaper than a movie ticket.",
	  "author": "Doug Horton"
	},
	{
	  "quote": "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
	  "author": "Confucius"
	},
	{
	  "quote": "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
	  "author": "Cicero"
	},
	{
	  "quote": "Goals are the fuel in the furnace of achievement.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "You are the only person on Earth who can use your ability.",
	  "author": "Zig Ziglar"
	},
	{
	  "quote": "They say that time changes things, but you actually have to change them yourself.",
	  "author": "Andy Warhol"
	},
	{
	  "quote": "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
	  "author": "Francois de La Rochefoucauld"
	},
	{
	  "quote": "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
	  "author": "Buddha"
	},
	{
	  "quote": "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
	  "author": "Winston Churchill"
	},
	{
	  "quote": "A man of ability and the desire to accomplish something can do anything.",
	  "author": "Donald Kircher"
	},
	{
	  "quote": "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Reason and free inquiry are the only effectual agents against error.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "The best teacher is experience learned from failures.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
	  "author": "Hasidic saying"
	},
	{
	  "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
	  "author": "Harriet Tubman"
	},
	{
	  "quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	  "author": ""
	},
	{
	  "quote": "A smile is a light in the window of your face to show your heart is at home.",
	  "author": ""
	},
	{
	  "quote": "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.",
	  "author": "Thomas Fuller"
	},
	{
	  "quote": "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
	  "author": "Buddha"
	},
	{
	  "quote": "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
	  "author": "Chuck Norris"
	},
	{
	  "quote": "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
	  "author": "Colin Powell"
	},
	{
	  "quote": "People may doubt what you say, but they will believe what you do.",
	  "author": "Lewis Cass"
	},
	{
	  "quote": "A bend in the road is not the end of the road...unless you fail to make the turn.",
	  "author": ""
	},
	{
	  "quote": "When you judge another, you do not define them, you define yourself.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
	  "author": "Eden Phillpotts"
	},
	{
	  "quote": "Speak low, if you speak love.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "The industrial landscape is already littered with remains of once successful companies that could not adapt their strategic vision to altered conditions of competition.",
	  "author": "Abernathy"
	},
	{
	  "quote": "We must not allow ourselves to become like the system we oppose.",
	  "author": "Bishop Desmond Tutu"
	},
	{
	  "quote": "Change your thoughts, change your life!",
	  "author": ""
	},
	{
	  "quote": "When performance exceeds ambition, the overlap is called success.",
	  "author": "Cullen Hightower"
	},
	{
	  "quote": "To fly, we have to have resistance.",
	  "author": "Maya Lin"
	},
	{
	  "quote": "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "All our knowledge has its origins in our perceptions.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Gratitude is the fairest blossom which springs from the soul.",
	  "author": "Henry Beecher"
	},
	{
	  "quote": "A good rest is half the work.",
	  "author": ""
	},
	{
	  "quote": "Tension is who you think you should be. Relaxation is who you are.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Anything you really want, you can attain, if you really go after it.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.",
	  "author": "Jawaharlal Nehru"
	},
	{
	  "quote": "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "Let the beauty of what you love be what you do.",
	  "author": "Rumi"
	},
	{
	  "quote": "Ask yourself the secret of your success. Listen to your answer, and practice it.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The truth which has made us free will in the end make us glad also.",
	  "author": "Felix Adler"
	},
	{
	  "quote": "Chaos is inherent in all compounded things. Strive on with diligence.",
	  "author": "Buddha"
	},
	{
	  "quote": "Action is the foundational key to all success.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "We must not say every mistake is a foolish one.",
	  "author": "Cicero"
	},
	{
	  "quote": "Ability will never catch up with the demand for it.",
	  "author": "Confucius"
	},
	{
	  "quote": "I want you to be everything that's you, deep at the center of your being.",
	  "author": "Confucius"
	},
	{
	  "quote": "Love is the master key that opens the gates of happiness.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "Speak when you are angry and you will make the best speech you will ever regret.",
	  "author": "Ambrose Bierce"
	},
	{
	  "quote": "A thing long expected takes the form of the unexpected when at last it comes.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "I know but one freedom and that is the freedom of the mind.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
	  "author": "Leonardo Ruiz"
	},
	{
	  "quote": "Our strength grows out of our weaknesses.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "You teach best what you most need to learn.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "As we grow as unique persons, we learn to respect the uniqueness of others.",
	  "author": "Robert Schuller"
	},
	{
	  "quote": "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
	  "author": "Rabbi Hillel"
	},
	{
	  "quote": "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
	  "author": "Andr� Gide"
	},
	{
	  "quote": "In separateness lies the world's great misery, in compassion lies the world's true strength.",
	  "author": "Buddha"
	},
	{
	  "quote": "If you can't explain it simply, you don't understand it well enough.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Most smiles are started by another smile.",
	  "author": ""
	},
	{
	  "quote": "Example has more followers than reason.",
	  "author": "Christian Bovee"
	},
	{
	  "quote": "Happiness does not come from having much, but from being attached to little.",
	  "author": "Cheng Yen"
	},
	{
	  "quote": "You must train your intuition � you must trust the small voice inside you which tells you exactly what to say, what to decide.",
	  "author": "Ingrid Bergman"
	},
	{
	  "quote": "Time changes everything except something within us which is always surprised by change.",
	  "author": "Thomas Hardy"
	},
	{
	  "quote": "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
	  "author": "Frances de Sales"
	},
	{
	  "quote": "Blessed is the man who expects nothing, for he shall never be disappointed.",
	  "author": "Alexander Pope"
	},
	{
	  "quote": "The real measure of your wealth is how much youd be worth if you lost all your money.",
	  "author": ""
	},
	{
	  "quote": "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
	  "author": "Joyce Brothers"
	},
	{
	  "quote": "Wherever a man turns he can find someone who needs him.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
	  "author": "Eden Phillpotts"
	},
	{
	  "quote": "Never tell me the sky�s the limit when there are footprints on the moon.",
	  "author": ""
	},
	{
	  "quote": "Be kind whenever possible. It is always possible.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
	  "author": "Barbara Baron"
	},
	{
	  "quote": "It is impossible for a man to learn what he thinks he already knows.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Success is getting what you want. Happiness is wanting what you get.",
	  "author": "Dale Carnegie"
	},
	{
	  "quote": "One that desires to excel should endeavour in those things that are in themselves most excellent.",
	  "author": "Epictetus"
	},
	{
	  "quote": "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.",
	  "author": "Mary Pickford"
	},
	{
	  "quote": "The greatest mistake you can make in life is to be continually fearing you will make one.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "Imagination is the living power and prime agent of all human perception.",
	  "author": "Samuel Taylor Coleridge"
	},
	{
	  "quote": "My mama always said: life's like a box of chocolate � you never know what you gonna get.",
	  "author": "Forrest Gump"
	},
	{
	  "quote": "The only Zen you find on the tops of mountains is the Zen you bring up there.",
	  "author": "Robert Pirsig"
	},
	{
	  "quote": "Yeah we all shine on, like the moon, and the stars, and the sun.",
	  "author": "John Lennon"
	},
	{
	  "quote": "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
	  "author": "Frank Wright"
	},
	{
	  "quote": "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
	  "author": "Margaret Cousins"
	},
	{
	  "quote": "A person who never made a mistake never tried anything new.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "There is no way to prosperity, prosperity is the way.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
	  "author": "Stephen Covey"
	},
	{
	  "quote": "Life is not measured by the breaths you take, but by its breathtaking moments.",
	  "author": "Michael Vance"
	},
	{
	  "quote": "If I know what love is, it is because of you.",
	  "author": "Hermann Hesse"
	},
	{
	  "quote": "The less effort, the faster and more powerful you will be.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Every new day is another chance to change your life.",
	  "author": ""
	},
	{
	  "quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
	  "author": "Buddha"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "The winner ain't the one with the fastest car it's the one who refuses to lose.",
	  "author": "Dale Earnhardt"
	},
	{
	  "quote": "Talk doesn't cook rice.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Gratitude is riches. Complaint is poverty.",
	  "author": "Doris Day"
	},
	{
	  "quote": "One must be fond of people and trust them if one is not to make a mess of life.",
	  "author": "E. M. Forster"
	},
	{
	  "quote": "Rather than wishing for change, you first must be prepared to change.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "Setting goals is the first step in turning the invisible into the visible.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "For everything that lives is holy, life delights in life.",
	  "author": "William Blake"
	},
	{
	  "quote": "By accepting yourself and being fully what you are, your presence can make others happy.",
	  "author": "Jane Roberts"
	},
	{
	  "quote": "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
	  "author": "Chuang Tzu"
	},
	{
	  "quote": "The best thing in every noble dream is the dreamer...",
	  "author": "Moncure Conway"
	},
	{
	  "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
	  "author": "Buckminster Fuller"
	},
	{
	  "quote": "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
	  "author": "Dhammapada"
	},
	{
	  "quote": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
	  "author": "George Sheehan"
	},
	{
	  "quote": "Sadness may be part of life but there is no need to let it dominate your entire life.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The only real mistake is the one from which we learn nothing.",
	  "author": "John Powell"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "Life isn't about finding yourself. Life is about creating yourself.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.",
	  "author": "Richard Needham"
	},
	{
	  "quote": "The superior man acts before he speaks, and afterwards speaks according to his action.",
	  "author": "Confucius"
	},
	{
	  "quote": "Well done is better than well said.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "I hear and I forget. I see and I remember. I do and I understand.",
	  "author": "Confucius"
	},
	{
	  "quote": "Life is a learning experience, only if you learn.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "Argue for your limitations, and sure enough they're yours.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "No man can succeed in a line of endeavor which he does not like.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
	  "author": ""
	},
	{
	  "quote": "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
	  "author": "John Simone"
	},
	{
	  "quote": "Love is just a word until someone comes along and gives it meaning.",
	  "author": ""
	},
	{
	  "quote": "I know but one freedom and that is the freedom of the mind.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "Action will remove the doubts that theory cannot solve.",
	  "author": "Tehyi Hsieh"
	},
	{
	  "quote": "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
	  "author": "Charles Dickens"
	},
	{
	  "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
	  "author": "Harriet Tubman"
	},
	{
	  "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
	  "author": "John Simone"
	},
	{
	  "quote": "Most folks are about as happy as they make up their minds to be.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "The greatest way to live with honor in this world is to be what we pretend to be.",
	  "author": "Socrates"
	},
	{
	  "quote": "Kindness is the greatest wisdom.",
	  "author": ""
	},
	{
	  "quote": "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "If you would take, you must first give, this is the beginning of intelligence.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
	  "author": "Blaise Pascal"
	},
	{
	  "quote": "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
	  "author": "Confucius"
	},
	{
	  "quote": "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Our intention creates our reality.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
	  "author": "Robert Stevenson"
	},
	{
	  "quote": "When the solution is simple, God is answering.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The doors we open and close each day decide the lives we live.",
	  "author": "Flora Whittemore"
	},
	{
	  "quote": "Life is just a chance to grow a soul.",
	  "author": "A. Powell Davies"
	},
	{
	  "quote": "He who obtains has little. He who scatters has much.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "If you spend too much time thinking about a thing, you'll never get it done.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
	  "author": "Doug Larson"
	},
	{
	  "quote": "The odds of hitting your target go up dramatically when you aim at it.",
	  "author": "Mal Pancoast"
	},
	{
	  "quote": "Fear is a darkroom where negatives develop.",
	  "author": "Usman Asif"
	},
	{
	  "quote": "Your work is to discover your work and then with all your heart to give yourself to it.",
	  "author": "Buddha"
	},
	{
	  "quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "From wonder into wonder existence opens.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
	  "author": "Simone Weil"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the universe.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "You can stand tall without standing on someone. You can be a victor without having victims.",
	  "author": "Harriet Woods"
	},
	{
	  "quote": "I believe that we are fundamentally the same and have the same basic potential.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "If you cannot do great things, do small things in a great way.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "I believe in one thing only, the power of human will.",
	  "author": "Joseph Stalin"
	},
	{
	  "quote": "You can't choose up sides on a round world.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Excellence is not a skill. It is an attitude.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "It's not what happens to you, but how you react to it that matters.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Bad times have a scientific value. These are occasions a good learner would not miss.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
	  "author": ""
	},
	{
	  "quote": "Life is like riding a bicycle. To keep your balance you must keep moving.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "It's not who you are that holds you back, it's who you think you're not.",
	  "author": ""
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "Miracles come in moments. Be ready and willing.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to a better understanding of ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "The deepest craving of human nature is the need to be appreciated.",
	  "author": "William James"
	},
	{
	  "quote": "The free man is he who does not fear to go to the end of his thought.",
	  "author": "Leon Blum"
	},
	{
	  "quote": "All children are artists. The problem is how to remain an artist once he grows up.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "You can do it if you believe you can!",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
	  "author": ""
	},
	{
	  "quote": "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "There never was a good knife made of bad steel.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Either I will find a way, or I will make one.",
	  "author": "Philip Sidney"
	},
	{
	  "quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
	  "author": "Alfred Sheinwold"
	},
	{
	  "quote": "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
	  "author": "Edna Millay"
	},
	{
	  "quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	  "author": "Laurence J. Peter"
	},
	{
	  "quote": "Take no thought of who is right or wrong or who is better than. Be not for or against.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Argue for your limitations, and sure enough theyre yours.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
	  "author": "William Saroyan"
	},
	{
	  "quote": "Love is the master key that opens the gates of happiness.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
	  "author": "Wolfgang Amadeus Mozart"
	},
	{
	  "quote": "There is only one success � to be able to spend your life in your own way.",
	  "author": "Christopher Morley"
	},
	{
	  "quote": "We lost because we told ourselves we lost.",
	  "author": "Leo Tolstoy"
	},
	{
	  "quote": "All the flowers of all the tomorrows are in the seeds of today.",
	  "author": ""
	},
	{
	  "quote": "The difficulties of life are intended to make us better, not bitter.",
	  "author": ""
	},
	{
	  "quote": "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "A stumble may prevent a fall.",
	  "author": ""
	},
	{
	  "quote": "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
	  "author": "John F. Kennedy"
	},
	{
	  "quote": "You have power over your mind � not outside events. Realize this, and you will find strength.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
	  "author": "Desiderius Erasmus"
	},
	{
	  "quote": "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
	  "author": "Tomas Eliot"
	},
	{
	  "quote": "Nothing strengthens authority so much as silence.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to a better understanding of ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "For success, attitude is equally as important as ability.",
	  "author": "Harry Banks"
	},
	{
	  "quote": "He who knows that enough is enough will always have enough.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The cautious seldom err.",
	  "author": "Confucius"
	},
	{
	  "quote": "He who talks more is sooner exhausted.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "I think somehow we learn who we really are and then live with that decision.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "The winner ain't the one with the fastest car it's the one who refuses to lose.",
	  "author": "Dale Earnhardt"
	},
	{
	  "quote": "People may doubt what you say, but they will believe what you do.",
	  "author": "Lewis Cass"
	},
	{
	  "quote": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
	  "author": "Donald Trump"
	},
	{
	  "quote": "To succeed, we must first believe that we can.",
	  "author": "Michael Korda"
	},
	{
	  "quote": "What you give is what you get.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "To avoid criticism, do nothing, say nothing, be nothing.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
	  "author": "Jacob Braude"
	},
	{
	  "quote": "Mistakes are always forgivable, if one has the courage to admit them.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
	  "author": "Simone Weil"
	},
	{
	  "quote": "Success is determined by those whom prove the impossible, possible.",
	  "author": "James Pence"
	},
	{
	  "quote": "Absence makes the heart grow fonder.",
	  "author": "Haynes Bayly"
	},
	{
	  "quote": "Life is a succession of moments. To live each one is to succeed.",
	  "author": "Corita Kent"
	},
	{
	  "quote": "Doing what you love is the cornerstone of having abundance in your life.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
	  "author": "Marcel Proust"
	},
	{
	  "quote": "All is flux; nothing stays still.",
	  "author": "Heraclitus"
	},
	{
	  "quote": "I have always thought the actions of men the best interpreters of their thoughts.",
	  "author": "John Locke"
	},
	{
	  "quote": "Fear not for the future, weep not for the past.",
	  "author": "Percy Shelley"
	},
	{
	  "quote": "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Wrinkles should merely indicate where smiles have been.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "The only way to have a friend is to be one.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "We choose our destiny in the way we treat others.",
	  "author": "Wit"
	},
	{
	  "quote": "Love is the master key that opens the gates of happiness.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
	  "author": "Buddha"
	},
	{
	  "quote": "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
	  "author": "Robert Fulghum"
	},
	{
	  "quote": "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
	  "author": "Confucius"
	},
	{
	  "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
	  "author": "Rumi"
	},
	{
	  "quote": "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
	  "author": "Sophocles"
	},
	{
	  "quote": "If you would take, you must first give, this is the beginning of intelligence.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Knowledge has three degrees � opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
	  "author": "Plotinus"
	},
	{
	  "quote": "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.",
	  "author": "Jonathan Swift"
	},
	{
	  "quote": "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
	  "author": "William Lyon Phelps"
	},
	{
	  "quote": "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
	  "author": "William Londen"
	},
	{
	  "quote": "Wisdom is the supreme part of happiness.",
	  "author": "Sophocles"
	},
	{
	  "quote": "You may only be someone in the world, but to someone else, you may be the world.",
	  "author": ""
	},
	{
	  "quote": "Most people are about as happy as they make up their minds to be",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you�ll never get back.",
	  "author": ""
	},
	{
	  "quote": "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.",
	  "author": "Anne Bradstreet"
	},
	{
	  "quote": "The greatest way to live with honor in this world is to be what we pretend to be.",
	  "author": "Socrates"
	},
	{
	  "quote": "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
	  "author": "Buddha"
	},
	{
	  "quote": "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Slow down and everything you are chasing will come around and catch you.",
	  "author": "John De Paola"
	},
	{
	  "quote": "Staying in one place is the best path to be taken over and surpassed by many.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The cause is hidden. The effect is visible to all.",
	  "author": "Ovid"
	},
	{
	  "quote": "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
	  "author": "Marianne Williamson"
	},
	{
	  "quote": "I begin with an idea and then it becomes something else.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "It is not enough to have a good mind; the main thing is to use it well.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "All is flux; nothing stays still.",
	  "author": "Heraclitus"
	},
	{
	  "quote": "Silence is a fence around wisdom.",
	  "author": "German proverb"
	},
	{
	  "quote": "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "Better than a thousand hollow words, is one word that brings peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "We cannot solve our problems with the same thinking we used when we created them.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "If you can dream it, you can do it.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
	  "author": "Albert Camus"
	},
	{
	  "quote": "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "Friends are those rare people who ask how we are and then wait to hear the answer.",
	  "author": "Ed Cunningham"
	},
	{
	  "quote": "I may not know everything, but everything is not known yet anyway.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
	  "author": "Sydney Smith"
	},
	{
	  "quote": "Everything in the universe goes by indirection. There are no straight lines.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Vision without action is a daydream. Action without vision is a nightmare.",
	  "author": "Japanese proverb"
	},
	{
	  "quote": "From wonder into wonder existence opens.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "There is never enough time to do everything, but there is always enough time to do the most important thing.",
	  "author": "Brian Tracy"
	},
	{
	  "quote": "You really can change the world if you care enough.",
	  "author": "Marian Edelman"
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
	  "author": "Buddha"
	},
	{
	  "quote": "You do not become good by trying to be good, but by finding the goodness that is already within you.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "You can observe a lot just by watching.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "Life is not measured by the breaths we take, but by the moments that take our breath.",
	  "author": ""
	},
	{
	  "quote": "Setting an example is not the main means of influencing another, it is the only means.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The best way out is always through.",
	  "author": "Robert Frost"
	},
	{
	  "quote": "All things change; nothing perishes.",
	  "author": "Ovid"
	},
	{
	  "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
	  "author": "Buckminster Fuller"
	},
	{
	  "quote": "You only lose what you cling to.",
	  "author": "Buddha"
	},
	{
	  "quote": "The only real failure in life is not to be true to the best one knows.",
	  "author": "Buddha"
	},
	{
	  "quote": "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
	  "author": "Edward Young"
	},
	{
	  "quote": "Just as much as we see in others we have in ourselves.",
	  "author": "William Hazlitt"
	},
	{
	  "quote": "What you are is what you have been. What you�ll be is what you do now.",
	  "author": "Buddha"
	},
	{
	  "quote": "If there is no struggle, there is no progress.",
	  "author": "Frederick Douglass"
	},
	{
	  "quote": "The cure for boredom is curiosity. There is no cure for curiosity.",
	  "author": "Ellen Parr"
	},
	{
	  "quote": "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
	  "author": "William Saroyan"
	},
	{
	  "quote": "To bring anything into your life, imagine that it's already there.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
	  "author": "Joseph Roux"
	},
	{
	  "quote": "People grow through experience if they meet life honestly and courageously. This is how character is built.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "It's not what happens to you, but how you react to it that matters.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Never put off till tomorrow what you can do today.",
	  "author": "Thomas Jefferson"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "If you think you can, you can. And if you think you can't, you're right.",
	  "author": "Henry Ford"
	},
	{
	  "quote": "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
	  "author": "Sam Levenson"
	},
	{
	  "quote": "Experience keeps a dear school, but fools will learn in no other.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Every problem has a gift for you in its hands.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
	  "author": "Mohandas Gandhi"
	},
	{
	  "quote": "Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.",
	  "author": "Gordon Hinckley"
	},
	{
	  "quote": "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
	  "author": "Benjamin Haydon"
	},
	{
	  "quote": "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
	  "author": "Lisa Alther"
	},
	{
	  "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
	  "author": "Louis Pasteur"
	},
	{
	  "quote": "No one can make you feel inferior without your consent.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "The only way to have a friend is to be one.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "There never was a good knife made of bad steel.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
	  "author": "David Jordan"
	},
	{
	  "quote": "Beauty is not in the face; beauty is a light in the heart.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "The beginning of knowledge is the discovery of something we do not understand.",
	  "author": "Frank Herbert"
	},
	{
	  "quote": "The future is completely open, and we are writing it moment to moment.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Music in the soul can be heard by the universe.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "It is through science that we prove, but through intuition that we discover.",
	  "author": "Jules Poincare"
	},
	{
	  "quote": "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
	  "author": "Jane Addams"
	},
	{
	  "quote": "We have two ears and one mouth so that we can listen twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
	  "author": "Frank Crane"
	},
	{
	  "quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
	  "author": "Isaac Asimov"
	},
	{
	  "quote": "What we see depends mainly on what we look for.",
	  "author": "John Lubbock"
	},
	{
	  "quote": "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "If you don't like something, change it. If you can't change it, change your attitude.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
	  "author": "Audre Lorde"
	},
	{
	  "quote": "It does not matter how slowly you go as long as you do not stop.",
	  "author": "Confucius"
	},
	{
	  "quote": "To hell with circumstances; I create opportunities.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Every problem has a gift for you in its hands.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "It's easier to see the mistakes on someone else's paper.",
	  "author": ""
	},
	{
	  "quote": "Compassion and happiness are not a sign of weakness but a sign of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "No day in which you learn something is a complete loss.",
	  "author": "David Eddings"
	},
	{
	  "quote": "He who has imagination without learning has wings but no feet.",
	  "author": "Joseph Joubert"
	},
	{
	  "quote": "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Everything in the universe goes by indirection. There are no straight lines.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Passion creates the desire for more and action fuelled by passion creates a future.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
	  "author": "Henry Miller"
	},
	{
	  "quote": "The first step to getting the things you want out of life is this: decide what you want.",
	  "author": "Ben Stein"
	},
	{
	  "quote": "When in doubt, tell the truth.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "The world is always in movement.",
	  "author": "V. Naipaul"
	},
	{
	  "quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "A man sees in the world what he carries in his heart.",
	  "author": "Goethe"
	},
	{
	  "quote": "You might well remember that nothing can bring you success but yourself.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Learning is finding out what you already know.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "I have never been hurt by anything I didn't say.",
	  "author": "Calvin Coolidge"
	},
	{
	  "quote": "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
	  "author": "Harriet Lerner"
	},
	{
	  "quote": "What you give is what you get.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "The world is always in movement.",
	  "author": "V. Naipaul"
	},
	{
	  "quote": "The art of progress is to preserve order amid change, and to preserve change amid order.",
	  "author": "Alfred Whitehead"
	},
	{
	  "quote": "The future is completely open, and we are writing it moment to moment.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
	  "author": "Margaret Runbeck"
	},
	{
	  "quote": "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
	  "author": ""
	},
	{
	  "quote": "Nothing ever goes away until it has taught us what we need to know.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
	  "author": "Kahlil Gibran"
	},
	{
	  "quote": "A good teacher is like a candle � it consumes itself to light the way for others.",
	  "author": ""
	},
	{
	  "quote": "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
	  "author": "Peter Drucker"
	},
	{
	  "quote": "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
	  "author": "Confucius"
	},
	{
	  "quote": "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "Myths which are believed in tend to become true.",
	  "author": "George Orwell"
	},
	{
	  "quote": "Id rather regret the things that I have done than the things that I have not done.",
	  "author": "Lucille Ball"
	},
	{
	  "quote": "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
	  "author": "Confucius"
	},
	{
	  "quote": "Go put your creed into the deed. Nor speak with double tongue.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
	  "author": "Alfred Tennyson"
	},
	{
	  "quote": "The aim of life is self-development. To realize ones nature perfectly � that is what each of us is here for.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "It all depends on how we look at things, and not how they are in themselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Those who cannot learn from history are doomed to repeat it.",
	  "author": "George Santayan"
	},
	{
	  "quote": "It isn't where you come from, it's where you're going that counts.",
	  "author": "Ella Fitzgerald"
	},
	{
	  "quote": "Keep yourself to the sunshine and you cannot see the shadow.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "We never live; we are always in the expectation of living.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Happiness is a Swedish sunset � it is there for all, but most of us look the other way and lose it.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "To enjoy life, we must touch much of it lightly.",
	  "author": "Voltaire"
	},
	{
	  "quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Failure will never overtake me if my determination to succeed is strong enough.",
	  "author": "Og Mandino"
	},
	{
	  "quote": "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "If you cannot do great things, do small things in a great way.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "If one does not know to which port is sailing, no wind is favorable.",
	  "author": "Seneca"
	},
	{
	  "quote": "The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.",
	  "author": "Edward Ericson"
	},
	{
	  "quote": "Try not to become a man of success, but rather try to become a man of value.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Smile, breathe and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Wherever a man turns he can find someone who needs him.",
	  "author": "Albert Schweitzer"
	},
	{
	  "quote": "The minute you settle for less than you deserve, you get even less than you settled for.",
	  "author": "Maureen Dowd"
	},
	{
	  "quote": "The most complicated achievements of thought are possible without the assistance of consciousness.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "A failure is a man who has blundered but is not capable of cashing in on the experience.",
	  "author": "Elbert Hubbard"
	},
	{
	  "quote": "Stay away from what might have been and look at what will be.",
	  "author": "Marsha Petrie Sue"
	},
	{
	  "quote": "Choose a job you love, and you will never have to work a day in your life.",
	  "author": "Confucius"
	},
	{
	  "quote": "He who lives in harmony with himself lives in harmony with the universe.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "There is only one corner of the universe you can be certain of improving, and that's your own self.",
	  "author": "Aldous Huxley"
	},
	{
	  "quote": "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
	  "author": "Thomas Carlyle"
	},
	{
	  "quote": "The truest greatness lies in being kind, the truest wisdom in a happy mind.",
	  "author": "Ella Wilcox"
	},
	{
	  "quote": "An ounce of emotion is equal to a ton of facts.",
	  "author": "John Junor"
	},
	{
	  "quote": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.",
	  "author": "Cadet Maxim"
	},
	{
	  "quote": "Try not to become a man of success but rather try to become a man of value.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "At the center of your being you have the answer; you know who you are and you know what you want.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "At the center of your being you have the answer; you know who you are and you know what you want.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
	  "author": "Sydney Smith"
	},
	{
	  "quote": "The superior man is satisfied and composed; the mean man is always full of distress.",
	  "author": "Confucius"
	},
	{
	  "quote": "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "If a man does his best, what else is there?",
	  "author": "George Patton"
	},
	{
	  "quote": "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Only when we are no longer afraid do we begin to live.",
	  "author": "Dorothy Thompson"
	},
	{
	  "quote": "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
	  "author": "Robert Fulghum"
	},
	{
	  "quote": "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
	  "author": "John Adams"
	},
	{
	  "quote": "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
	  "author": "Barbara De Angelis"
	},
	{
	  "quote": "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "When in doubt, tell the truth.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "You do not become good by trying to be good, but by finding the goodness that is already within you.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "It's not who you are that holds you back, it's who you think you're not.",
	  "author": ""
	},
	{
	  "quote": "It is not so important to know everything as to appreciate what we learn.",
	  "author": "Hannah More"
	},
	{
	  "quote": "We must become the change we want to see.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Great is the art of beginning, but greater is the art of ending.",
	  "author": "Lazurus Long"
	},
	{
	  "quote": "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
	  "author": "Richard Bach"
	},
	{
	  "quote": "To study and not think is a waste. To think and not study is dangerous.",
	  "author": "Confucius"
	},
	{
	  "quote": "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Smile, breathe and go slowly.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
	  "author": "Pat Riley"
	},
	{
	  "quote": "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
	  "author": ""
	},
	{
	  "quote": "Time is the most valuable thing a man can spend.",
	  "author": "Theophrastus"
	},
	{
	  "quote": "Chaos and Order are not enemies, only opposites.",
	  "author": "Richard Garriott"
	},
	{
	  "quote": "The day you decide to do it is your lucky day.",
	  "author": "Japanese proverb"
	},
	{
	  "quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
	  "author": "Buddha"
	},
	{
	  "quote": "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
	  "author": "Henry Van Dyke"
	},
	{
	  "quote": "To forgive is to set a prisoner free and realize that prisoner was you.",
	  "author": "Lewis B. Smedes"
	},
	{
	  "quote": "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.",
	  "author": "Marcus Aurelius"
	},
	{
	  "quote": "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
	  "author": "Frederick Douglass"
	},
	{
	  "quote": "You give before you get.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "More often than not, anger is actually an indication of weakness rather than of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Setting an example is not the main means of influencing another, it is the only means.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Keep your eyes on the stars and your feet on the ground.",
	  "author": "Theodore Roosevelt"
	},
	{
	  "quote": "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Argue for your limitations, and sure enough theyre yours.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "The only limit to your impact is your imagination and commitment.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "A good teacher is like a candle � it consumes itself to light the way for others.",
	  "author": ""
	},
	{
	  "quote": "You must welcome change as the rule but not as your ruler.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "If you correct your mind, the rest of your life will fall into place.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Work for something because it is good, not just because it stands a chance to succeed.",
	  "author": "Vaclav Havel"
	},
	{
	  "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
	  "author": "Aristotle"
	},
	{
	  "quote": "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "Trouble is only opportunity in work clothes.",
	  "author": "Henry J. Kaiser"
	},
	{
	  "quote": "You're never a loser until you quit trying.",
	  "author": "Mike Ditka"
	},
	{
	  "quote": "If the shoe doesn't fit, must we change the foot?",
	  "author": "Gloria Steinem"
	},
	{
	  "quote": "You may only be someone in the world, but to someone else, you may be the world.",
	  "author": ""
	},
	{
	  "quote": "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
	  "author": "Edna Millay"
	},
	{
	  "quote": "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
	  "author": "Ovid"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "The world has the habit of making room for the man whose actions show that he knows where he is going.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Nothing will work unless you do.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
	  "author": "Barack Obama"
	},
	{
	  "quote": "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
	  "author": "Franklin D. Roosevelt"
	},
	{
	  "quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
	  "author": "John Quincy Adams"
	},
	{
	  "quote": "It is surprising what a man can do when he has to, and how little most men will do when they don't have to.",
	  "author": "Walter Linn"
	},
	{
	  "quote": "Doing nothing is better than being busy doing nothing.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "I know but one freedom and that is the freedom of the mind.",
	  "author": "Antoine de Saint-Exupery"
	},
	{
	  "quote": "You might well remember that nothing can bring you success but yourself.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
	  "author": "Bernice Reagon"
	},
	{
	  "quote": "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
	  "author": "Buddha"
	},
	{
	  "quote": "The world has the habit of making room for the man whose actions show that he knows where he is going.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "We know what we are, but know not what we may be.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Peace cannot be kept by force. It can only be achieved by understanding.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Our ability to achieve happiness and success depends on the strength of our wings.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
	  "author": "Charles DeLint"
	},
	{
	  "quote": "The least of things with a meaning is worth more in life than the greatest of things without it.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "They must often change, who would be constant in happiness or wisdom.",
	  "author": "Confucius"
	},
	{
	  "quote": "If you want a thing done well, do it yourself.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Let yourself be silently drawn by the stronger pull of what you really love.",
	  "author": "Rumi"
	},
	{
	  "quote": "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
	  "author": "Tomas Eliot"
	},
	{
	  "quote": "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
	  "author": ""
	},
	{
	  "quote": "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
	  "author": ""
	},
	{
	  "quote": "Patience is the companion of wisdom.",
	  "author": "Saint Augustine"
	},
	{
	  "quote": "If you cannot be silent be brilliant and thoughtful.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Action may not always bring happiness, but there is no happiness without action.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "A rolling stone gathers no moss.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.",
	  "author": "Theodore H. White"
	},
	{
	  "quote": "To fly, we have to have resistance.",
	  "author": "Maya Lin"
	},
	{
	  "quote": "Never mistake activity for achievement.",
	  "author": "John Wooden"
	},
	{
	  "quote": "As the rest of the world is walking out the door, your best friends are the ones walking in.",
	  "author": ""
	},
	{
	  "quote": "Take no thought of who is right or wrong or who is better than. Be not for or against.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.",
	  "author": "William Menninger"
	},
	{
	  "quote": "The bird of paradise alights only upon the hand that does not grasp.",
	  "author": "John Berry"
	},
	{
	  "quote": "Why worry about tomorrow, when today is all we have?",
	  "author": ""
	},
	{
	  "quote": "Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.",
	  "author": "Matt Zotti"
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "Pick battles big enough to matter, small enough to win.",
	  "author": "Jonathan Kozol"
	},
	{
	  "quote": "Maxim for life: You get treated in life the way you teach people to treat you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "The ladder of success is never crowded at the top.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Trust yourself. You know more than you think you do.",
	  "author": "Benjamin Spock"
	},
	{
	  "quote": "We must embrace pain and burn it as fuel for our journey.",
	  "author": "Kenji Miyazawa"
	},
	{
	  "quote": "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
	  "author": "Edna Millay"
	},
	{
	  "quote": "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
	  "author": "Charles A. Lindbergh"
	},
	{
	  "quote": "He who is fixed to a star does not change his mind.",
	  "author": "Leonardo da Vinci"
	},
	{
	  "quote": "Try not to become a man of success, but rather try to become a man of value.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "The superior man is modest in his speech, but exceeds in his actions.",
	  "author": "Confucius"
	},
	{
	  "quote": "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
	  "author": "Denis Waitley"
	},
	{
	  "quote": "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
	  "author": ""
	},
	{
	  "quote": "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
	  "author": "Rabbi Hillel"
	},
	{
	  "quote": "You can't trust without risk but neither can you live in a cocoon.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
	  "author": "Buckminster Fuller"
	},
	{
	  "quote": "Be a good listener. Your ears will never get you in trouble.",
	  "author": "Frank Tyger"
	},
	{
	  "quote": "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
	  "author": "Benjamin Disraeli"
	},
	{
	  "quote": "We have two ears and one mouth so that we can listen twice as much as we speak.",
	  "author": "Epictetus"
	},
	{
	  "quote": "A thing long expected takes the form of the unexpected when at last it comes.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Do what you can. Want what you have. Be who you are.",
	  "author": "Forrest Church"
	},
	{
	  "quote": "Think for yourselves and let others enjoy the privilege to do so too.",
	  "author": "Voltaire"
	},
	{
	  "quote": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
	  "author": "Confucius"
	},
	{
	  "quote": "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
	  "author": "Melody Beattie"
	},
	{
	  "quote": "I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.",
	  "author": "Elizabeth Montagu"
	},
	{
	  "quote": "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate � that's my philosophy.",
	  "author": "Thornton Wilder"
	},
	{
	  "quote": "Things do not change, we change.",
	  "author": "Henry Thoreau"
	},
	{
	  "quote": "I love my past. I love my present. Im not ashamed of what Ive had, and Im not sad because I have it no longer.",
	  "author": "Colette"
	},
	{
	  "quote": "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "They can do all because they think they can.",
	  "author": "Virgil"
	},
	{
	  "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.",
	  "author": "Amy Bloom"
	},
	{
	  "quote": "It is not only for what we do that we are held responsible, but also for what we do not do.",
	  "author": "Moliere"
	},
	{
	  "quote": "Obstacles are those things you see when you take your eyes off the goal.",
	  "author": "Hannah More"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding of ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
	  "author": "Lisa Alther"
	},
	{
	  "quote": "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
	  "author": "Sai Baba"
	},
	{
	  "quote": "Work for something because it is good, not just because it stands a chance to succeed.",
	  "author": "Vaclav Havel"
	},
	{
	  "quote": "To be tested is good. The challenged life may be the best therapist.",
	  "author": "Gail Sheehy"
	},
	{
	  "quote": "Happiness does not come from having much, but from being attached to little.",
	  "author": "Cheng Yen"
	},
	{
	  "quote": "Act as if what you do makes a difference. It does.",
	  "author": "William James"
	},
	{
	  "quote": "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
	  "author": "Desiderius Erasmus"
	},
	{
	  "quote": "Our intention creates our reality.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "We are all inclined to judge ourselves by our ideals; others, by their acts.",
	  "author": "Harold Nicolson"
	},
	{
	  "quote": "A goal is a dream with a deadline.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
	  "author": "Arthur Conan Doyle"
	},
	{
	  "quote": "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "The amount of happiness that you have depends on the amount of freedom you have in your heart.",
	  "author": "Thich Nhat Hanh"
	},
	{
	  "quote": "Nothing is a waste of time if you use the experience wisely.",
	  "author": "Rodin"
	},
	{
	  "quote": "The years teach much which the days never know.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Life is a learning experience, only if you learn.",
	  "author": "Yogi Berra"
	},
	{
	  "quote": "Don't settle for a relationship that won't let you be yourself.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "If we did the things we are capable of, we would astound ourselves.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
	  "author": "Bernard Shaw"
	},
	{
	  "quote": "The only real valuable thing is intuition.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	  "author": ""
	},
	{
	  "quote": "If we are facing in the right direction, all we have to do is keep on walking.",
	  "author": ""
	},
	{
	  "quote": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "You always succeed in producing a result.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "A prudent question is one half of wisdom.",
	  "author": "Francis Bacon"
	},
	{
	  "quote": "Knowing is not enough; we must apply!",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "Don't wait. The time will never be just right.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Know how to listen, and you will profit even from those who talk badly.",
	  "author": "Plutarch"
	},
	{
	  "quote": "Mountains cannot be surmounted except by winding paths.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "You can be what you want to be. You have the power within and we will help you always.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "If you surrender to the wind, you can ride it.",
	  "author": "Toni Morrison"
	},
	{
	  "quote": "All know the way; few actually walk it.",
	  "author": "Bodhidharma"
	},
	{
	  "quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
	  "author": "Tryon Edwards"
	},
	{
	  "quote": "Those who are free of resentful thoughts surely find peace.",
	  "author": "Buddha"
	},
	{
	  "quote": "No is easier to do. Yes is easier to say.",
	  "author": "Jason Fried"
	},
	{
	  "quote": "What lies behind us and what lies before us are small matters compared to what lies within us.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "People are not lazy. They simply have impotent goals � that is, goals that do not inspire them.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
	  "author": ""
	},
	{
	  "quote": "Truth, and goodness, and beauty are but different faces of the same all.",
	  "author": "Ralph Emerson"
	},
	{
	  "quote": "Forgiveness does not change the past, but it does enlarge the future.",
	  "author": "Paul Boese"
	},
	{
	  "quote": "If one way be better than another, that you may be sure is natures way.",
	  "author": "Aristotle"
	},
	{
	  "quote": "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "A beautiful thing is never perfect.",
	  "author": ""
	},
	{
	  "quote": "Keep your eyes on the stars and your feet on the ground.",
	  "author": "Theodore Roosevelt"
	},
	{
	  "quote": "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "From error to error one discovers the entire truth.",
	  "author": "Sigmund Freud"
	},
	{
	  "quote": "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
	  "author": "Richard Bach"
	},
	{
	  "quote": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
	  "author": "Confucius"
	},
	{
	  "quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
	  "author": "Confucius"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Doing nothing is better than being busy doing nothing.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "Make the best use of what is in your power, and take the rest as it happens.",
	  "author": "Epictetus"
	},
	{
	  "quote": "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
	  "author": "Margaret Smith"
	},
	{
	  "quote": "To be wronged is nothing unless you continue to remember it.",
	  "author": "Confucius"
	},
	{
	  "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
	  "author": "Franklin Roosevelt"
	},
	{
	  "quote": "The future is completely open, and we are writing it moment to moment.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "More often than not, anger is actually an indication of weakness rather than of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
	  "author": "Julie Morgenstern"
	},
	{
	  "quote": "Victory belongs to the most persevering.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "They say that time changes things, but you actually have to change them yourself.",
	  "author": "Andy Warhol"
	},
	{
	  "quote": "He who deliberates fully before taking a step will spend his entire life on one leg.",
	  "author": "Chinese proverb"
	},
	{
	  "quote": "A house divided against itself cannot stand.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Everything that irritates us about others can lead us to an understanding about ourselves.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
	  "author": "Paavo Nurmi"
	},
	{
	  "quote": "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.",
	  "author": "Pema Chodron"
	},
	{
	  "quote": "Absence makes the heart grow fonder.",
	  "author": "Haynes Bayly"
	},
	{
	  "quote": "We must become the change we want to see.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
	  "author": "J. Willard Marriott"
	},
	{
	  "quote": "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
	  "author": "Anne Bronte"
	},
	{
	  "quote": "Enjoy the little things, for one day you may look back and realize they were the big things.",
	  "author": "Robert Brault"
	},
	{
	  "quote": "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
	  "author": "Daisaku Ikeda"
	},
	{
	  "quote": "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
	  "author": "Jean Lacordaire"
	},
	{
	  "quote": "Experience is simply the name we give our mistakes.",
	  "author": "Oscar Wilde"
	},
	{
	  "quote": "What you are is what you have been. What you�ll be is what you do now.",
	  "author": "Buddha"
	},
	{
	  "quote": "Watch the little things; a small leak will sink a great ship.",
	  "author": "Benjamin Franklin"
	},
	{
	  "quote": "Self-complacency is fatal to progress.",
	  "author": "Margaret Sangster"
	},
	{
	  "quote": "The journey of a thousand miles begins with one step.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Being right is highly overrated. Even a stopped clock is right twice a day.",
	  "author": ""
	},
	{
	  "quote": "We know from science that nothing in the universe exists as an isolated or independent entity.",
	  "author": "Margaret Wheatley"
	},
	{
	  "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
	  "author": "Louis Pasteur"
	},
	{
	  "quote": "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
	  "author": "Walter Lippmann"
	},
	{
	  "quote": "All achievements, all earned riches, have their beginning in an idea.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "The greatest way to live with honour in this world is to be what we pretend to be.",
	  "author": "Socrates"
	},
	{
	  "quote": "I believe that we are fundamentally the same and have the same basic potential.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "Life is what happens to you while you're busy making other plans.",
	  "author": "John Lennon"
	},
	{
	  "quote": "Peace begins with a smile.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "I have always thought the actions of men the best interpreters of their thoughts.",
	  "author": "John Locke"
	},
	{
	  "quote": "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
	  "author": "Charles A. Lindbergh"
	},
	{
	  "quote": "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.",
	  "author": "Napoleon Hill"
	},
	{
	  "quote": "Kindness is the golden chain by which society is bound together.",
	  "author": "Johann Wolfgang von Goethe"
	},
	{
	  "quote": "In the long run we get no more than we have been willing to risk giving.",
	  "author": "Sheldon Kopp"
	},
	{
	  "quote": "We are Divine enough to ask and we are important enough to receive.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Three things cannot be long hidden: the sun, the moon, and the truth.",
	  "author": "Buddha"
	},
	{
	  "quote": "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
	  "author": "William White"
	},
	{
	  "quote": "You do not become good by trying to be good, but by finding the goodness that is already within you.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "When you lose, don't lose the lesson.",
	  "author": ""
	},
	{
	  "quote": "Worry gives a small thing a big shadow.",
	  "author": ""
	},
	{
	  "quote": "Successful people ask better questions, and as a result, they get better answers.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "A man of ability and the desire to accomplish something can do anything.",
	  "author": "Donald Kircher"
	},
	{
	  "quote": "My reputation grows with every failure.",
	  "author": "George Shaw"
	},
	{
	  "quote": "A good plan today is better than a perfect plan tomorrow.",
	  "author": ""
	},
	{
	  "quote": "The awareness of our own strength makes us modest.",
	  "author": "Paul Cezanne"
	},
	{
	  "quote": "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "A good rest is half the work.",
	  "author": ""
	},
	{
	  "quote": "He who conquers others is strong; He who conquers himself is mighty.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "Patience is the companion of wisdom.",
	  "author": "Saint Augustine"
	},
	{
	  "quote": "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
	  "author": "Julie Morgenstern"
	},
	{
	  "quote": "You do not become good by trying to be good, but by finding the goodness that is already within you.",
	  "author": "Eckhart Tolle"
	},
	{
	  "quote": "I think somehow we learn who we really are and then live with that decision.",
	  "author": "Eleanor Roosevelt"
	},
	{
	  "quote": "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
	  "author": "Oliver Holmes"
	},
	{
	  "quote": "Every man takes the limits of his own field of vision for the limits of the world.",
	  "author": "Arthur Schopenhauer"
	},
	{
	  "quote": "Count your joys instead of your woes. Count your friends instead of your foes.",
	  "author": ""
	},
	{
	  "quote": "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
	  "author": "Robert Fulghum"
	},
	{
	  "quote": "It is not in the stars to hold our destiny but in ourselves.",
	  "author": "William Shakespeare"
	},
	{
	  "quote": "Take no thought of who is right or wrong or who is better than. Be not for or against.",
	  "author": "Bruce Lee"
	},
	{
	  "quote": "Weve got to have a dream if we are going to make a dream come true.",
	  "author": "Walt Disney"
	},
	{
	  "quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
	  "author": "Catherine Pulsifer"
	},
	{
	  "quote": "Follow your instincts. That is where true wisdom manifests itself.",
	  "author": "Oprah Winfrey"
	},
	{
	  "quote": "A man should look for what is, and not for what he thinks should be.",
	  "author": "Albert Einstein"
	},
	{
	  "quote": "Those that know, do. Those that understand, teach.",
	  "author": "Aristotle"
	},
	{
	  "quote": "To be upset over what you don't have is to waste what you do have.",
	  "author": "Ken S. Keyes"
	},
	{
	  "quote": "When in doubt, tell the truth.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "Think how hard physics would be if particles could think.",
	  "author": "Murray Gell-Mann"
	},
	{
	  "quote": "You are important enough to ask and you are blessed enough to receive back.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
	  "author": "Carl Jung"
	},
	{
	  "quote": "They can do all because they think they can.",
	  "author": "Virgil"
	},
	{
	  "quote": "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
	  "author": "Buddha"
	},
	{
	  "quote": "We could never learn to be brave and patient if there were only joy in the world.",
	  "author": "Helen Keller"
	},
	{
	  "quote": "Compassion and happiness are not a sign of weakness but a sign of strength.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "Maxim for life: You get treated in life the way you teach people to treat you.",
	  "author": "Wayne Dyer"
	},
	{
	  "quote": "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.",
	  "author": "Tony Robbins"
	},
	{
	  "quote": "An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.",
	  "author": "Thomas Fuller"
	},
	{
	  "quote": "There are people who have money and people who are rich.",
	  "author": "Coco Chanel"
	},
	{
	  "quote": "The more you know yourself, the more you forgive yourself.",
	  "author": "Confucius"
	},
	{
	  "quote": "The art of progress is to preserve order amid change, and to preserve change amid order.",
	  "author": "Alfred Whitehead"
	},
	{
	  "quote": "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
	  "author": "Margaret Mead"
	},
	{
	  "quote": "Kind words will unlock an iron door.",
	  "author": "Turkish proverb"
	},
	{
	  "quote": "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
	  "author": "Etty Hillesum"
	},
	{
	  "quote": "To get the full value of joy you must have someone to divide it with.",
	  "author": "Mark Twain"
	},
	{
	  "quote": "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.",
	  "author": "Plutarch"
	},
	{
	  "quote": "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
	  "author": "Michael Jordan"
	},
	{
	  "quote": "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
	  "author": "Chuang Tzu"
	},
	{
	  "quote": "If you want things to be different, perhaps the answer is to become different yourself.",
	  "author": "Norman Peale"
	},
	{
	  "quote": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
	  "author": "Jimmy Dean"
	},
	{
	  "quote": "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
	  "author": "Bertrand Russell"
	},
	{
	  "quote": "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
	  "author": "Hasidic saying"
	},
	{
	  "quote": "We have committed the Golden Rule to memory; let us now commit it to life.",
	  "author": "Edwin Markham"
	},
	{
	  "quote": "Where there is great love, there are always miracles.",
	  "author": "Willa Cather"
	},
	{
	  "quote": "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
	  "author": "Ralph Marston"
	},
	{
	  "quote": "To see things in the seed, that is genius.",
	  "author": "Lao Tzu"
	},
	{
	  "quote": "We must become the change we want to see.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
	  "author": "Charles A. Lindbergh"
	},
	{
	  "quote": "I have often regretted my speech, never my silence.",
	  "author": "Publilius Syrus"
	},
	{
	  "quote": "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
	  "author": "Buddha"
	},
	{
	  "quote": "If I know what love is, it is because of you.",
	  "author": "Hermann Hesse"
	},
	{
	  "quote": "All children are artists. The problem is how to remain an artist once he grows up.",
	  "author": "Pablo Picasso"
	},
	{
	  "quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "If you have knowledge, let others light their candles in it.",
	  "author": "Margaret Fuller"
	},
	{
	  "quote": "What you fear is that which requires action to overcome.",
	  "author": "Byron Pulsifer"
	},
	{
	  "quote": "I will prepare and some day my chance will come.",
	  "author": "Abraham Lincoln"
	},
	{
	  "quote": "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
	  "author": "Bernice Reagon"
	},
	{
	  "quote": "Think as a wise man but communicate in the language of the people.",
	  "author": "William Yeats"
	},
	{
	  "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
	  "author": "Mother Teresa"
	},
	{
	  "quote": "No valid plans for the future can be made by those who have no capacity for living now.",
	  "author": "Alan Watts"
	},
	{
	  "quote": "Imagination rules the world.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
	  "author": "Thomas Edison"
	},
	{
	  "quote": "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
	  "author": "Arthur Rubinstein"
	},
	{
	  "quote": "Excellence is to do a common thing in an uncommon way.",
	  "author": "Booker Washington"
	},
	{
	  "quote": "Be kind whenever possible. It is always possible.",
	  "author": "Dalai Lama"
	},
	{
	  "quote": "The true way to render ourselves happy is to love our work and find in it our pleasure.",
	  "author": "Francoise de Motteville"
	},
	{
	  "quote": "What we see depends mainly on what we look for.",
	  "author": "John Lubbock"
	},
	{
	  "quote": "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
	  "author": "Buddha"
	},
	{
	  "quote": "Sadness flies away on the wings of time.",
	  "author": "Jean de la Fontaine"
	},
	{
	  "quote": "The only Zen you find on the tops of mountains is the Zen you bring up there.",
	  "author": "Robert Pirsig"
	},
	{
	  "quote": "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
	  "author": "Frank Crane"
	},
	{
	  "quote": "It is not enough to have a good mind; the main thing is to use it well.",
	  "author": "Rene Descartes"
	},
	{
	  "quote": "The winds and waves are always on the side of the ablest navigators.",
	  "author": "Edward Gibbon"
	},
	{
	  "quote": "Victory belongs to the most persevering.",
	  "author": "Napoleon Bonaparte"
	},
	{
	  "quote": "I believe that every person is born with talent.",
	  "author": "Maya Angelou"
	},
	{
	  "quote": "It is the quality of our work which will please God, not the quantity.",
	  "author": "Mahatma Gandhi"
	},
	{
	  "quote": "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
	  "author": "Henry David Thoreau"
	},
	{
	  "quote": "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
	  "author": "Tom Jackson"
	},
	{
  
	  "quote": "Unless you try to do something beyond what you have already mastered, you will never grow.",
	  "author": "Ralph Waldo Emerson"
	},
	{
	  "quote": "The best revenge is massive success.",
	  "author": "Frank Sinatra"
	},
	{
	  "quote": "Dream big and dare to fail.",
	  "author": "Norman Vaughan"
	  },
	  {
	  "quote": "Programs must be written for people to read, and only incidentally for machines to execute.",
	  "author": "Harold Abelson",
	  "category": "programming"
	},
	{
	  "quote": "Truth can only be found in one place: the code.",
	  "author": "Robert C. Martin",
	  "category": "programming"
	},
	{
	  "quote": "Only Programmers can Cntr+s The World.",
	  "author": "Unknown Programmer",
	  "category": "programming"
	},
	{
	  "quote": "The most important property of a program is whether it accomplishes the intention of its user.",
	  "author": "C.A.R. Hoare",
	  "category": "programing"
	},
	{
  
	  "quote": "“Do not let circumstances control you. You change your circumstances.”",
	  "author": "Jackie Chan"
	},
	{
	  "quote": "“One must be a sea, to receive a polluted stream without becoming impure.”",
	  "author": "Friedrich Nietzsche"
	},
	{
	  "quote": "I obviously do everything to be hard to understand myself",
	  "author": "Friedrich Nietzsche"
	},
	{
	  "quote": "“Man is nothing else but what he makes of himself.”",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "“There is no human nature, since there is no god to conceive it.”",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "“I can always choose, but I ought to know that if I do not choose, I am still choosing.”",
	  "author": "Jean-Paul Sartre"
	},
	{
	  "quote": "If you look for a meaning, you'll miss everything that happens.”",
	  "author": "Andrei Tarkovsky"
	},
	{
	  "quote": "Being silent for a while is good. Words can't really express a person's emotions.",
	  "author": "Andrei Tarkovsky"
	},
	{
	  "quote": "Somewhere, something incredible is waiting to be known.",
	  "author": "Carl Sagan"
	},
	{
	  "quote": "The more you find out about the world, the more opportunities there are to laugh at it.",
	  "author": "Bill Nye"
	},
	{
	  "quote": "We are part of this universe; we are in this universe, but perhaps more important than both of those facts, is that the universe is in us.",
	  "author": "Neil deGrasse Tyson"
	},
	{
	  "quote": "Begin at the beginning, the King said, very gravely, and go on till you come to the end then stop.",
	  "author": "Lewis Carroll"
	},
	  {
	  "quote": "It’s no use going back to yesterday, because I was a different person then.",
	  "author": "Lewis Carroll"
	},
	  {
	  "quote": "She generally gave herself very good advice, (though she very seldom followed it).",
	  "author": "Lewis Carroll"
	},
	  {
	  "quote": "Who in the world am I? Ah, that's the great puzzle.",
	  "author": "Lewis Carroll"
	},
	{
	  "quote": "The past, like the future, is indefinite and exists only as a spectrum of possibilities.",
	  "author": "Stephen Hawking"
	},
	{
	  "quote": "People won't have time for you if you are always angry or complaining.",
	  "author": "Stephen Hawking"
	},
	{
	  "quote": "Let us sacrifice our today so that our children can have a better tomorrow.",
	  "author": "A.P.J Abdul Kalam"
	},
	{
	  "quote": "Only the unobservant would claim that a place has no seasons, would fail to notice nature and agriculture respond to the grand tilting of the planets in the cosmos - and that, even as busy urban people, we exist in an eternal natural world.",
	  "author": "Kevin West",
	  "category": "cooking"
	 },
	 {
	  "quote": "I’m not gonna run away, I never go back on my word! That’s my nindo: my ninja way.",
	  "author": "Uzumaki Naruto"
	},
	{
	  "quote": "Intelligence plus character - that is the goal of true education.",
	  "author": "K. Kamarajar"
	},
	{
	  "quote": "Try to forget what hurt you with regard to every action in life but don’t forget the lesson you learnt out of it.",
	  "author": "Joseph Vijay"
	},
	{
	  "quote": "Forget Fear, Do Something Different.",
	  "author": "Mahendra Singh Dhoni"
	},
	{
	  "quote": "WHAT DOESN’T KILL YOU, MAKE YOU STRONG.",
	  "author": "Mahendra Singh Dhoni"
	},
	{
	  "quote": "Simplicity is the ultimate sophistication",
	  "author": "Leonardo da Vinci"
	 },
	  {
	  "quote": "A good human being has the power of making the world a better place.",
	  "author": "Pratibha Hotwani"
	  },
	  {
	  "quote": "We accept the love we think we deserve.",
	  "author": "Stephen Chbosky"
	  },
	{
	  "quote": "It is better to be hated for what you are than to be loved for what you are not.",
	  "author": "Andre Gide"
	  },
	{
	  "quote": "Love all, trust a few, do wrong to none.",
	  "author": "William Shakespeare"
	  },
	{
	  "quote": "Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.",
	  "author": "Markus Zusak"
	},
	{
	  "quote":"You are the master of your destiny: No one and nothing can come in between you and your destiny except you. Take destiny by the horns and have fun.",
	  "author":"Po"
	},
	{
	  "quote":"Your real strength comes from being the best you you can be. Who are you? What are you good at? What makes you, you?",
	  "author":"Po"
	},
	{
	  "quote": "Quitters never win. Winners never quit.",
	  "author": "Dr. Irene C. Kassorla"
	},
	{
	  "quote": "Make every detail perfect and limit the number of details to perfect.",
	  "author": "Jack Dorsey"
	},
	{
	  "quote": "If your ship doesn’t come in, swim out to it.",
	  "author": "Jonathan Winters"
	},
	{
		"quote": "Never waste a minute thinking about people you don't like.",
		  "author": "Dwight D. Eisenhowe"
	},
	{
	  "quote": "You miss 100% of the shots you don't take.",
	  "author": "Wayne Gretzky"
	},
	{
	  "quote": "Don’t read success stories, you will only get a message. Read failure stories, you will get some ideas to get success.",
	  "author": "A. P. J. Abdul Kalam"
	},
	{
	  "quote": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
	  "author": "Steve Jobs"
	},
	{
	  "quote": "I'm not obsessed with sex, I just can't stop thinking about it. The performance of it. The awkwardness of it. The drama of it. The moment you realise someone wants your body. Not so much the feeling of it.",
	  "author": "Fleabag"
	},
	{
  
	  "quote": "I personally, generally, don't really feel much emotion if there's some problem and I'm actively solving it.",
	  "author": "Vitalik Buterin"
	},
	{
	  "quote": "When I was in grade five or six, I just remember quite a lot of people were always talking about me like I was some kind of math genius. And there were just so many moments when I realized, like, okay, why can't I just be like some normal person and go have a 75% average like everyone else.",
	  "author": "Vitalik Buterin"
	},
	{
	  "quote": "I think people don't realise that running a piece of code that verifies some conditions for a financial transaction, that by itself is a lot less work than verifying a cryptographic signature, and so even if the virtual machine is inefficient, the cryptographic signature is still going to dominate.",
	  "author": "Vitalik Buterin"
	},
	{
	  "quote": "Memento Mori",
	  "author": "Socrates"
	}, 
	{
	  "quote": "Make each day a new horizon",
	  "author": "Christopher McCandless"
	}, 
	{
	  "quote": "I read somewhere how important it is in life not necessarily to be strong, but to feel strong",
	  "author": "Christopher McCandless"
	},
	{
	  "quote":"Quiet people have the loudest minds.",
	  "author": "Stephen Hawking"
	},
	{
	  "quote": "Intelligence is the ability to adapt to change.",
	  "author": "Stephen Hawking"
	},
	{
	  "quote": "I am so clever that sometimes I don't understand a single word of what I am saying.",
	  "author": "Oscar Wilde"
	}
  ]
  