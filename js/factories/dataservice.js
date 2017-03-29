(function(){
	
	angular
		.module("pandaQuiz")
		.factory("DataService", DataFactory);
		
		function DataFactory(){
			var dataObj = {
				pandasData : pandasData,
				quizQuestions : quizQuestions,
				correctAnswers : correctAnswers
			};
			
			return dataObj;
		}
		
		
		
		var correctAnswers = [0,0,0,0,0,0,0,0,0,0];
		
		var quizQuestions  = [
        {
            type: "text",
            text: "Ile waży panda Wielka?",
            possibilities: [
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Ile lat żyją pandy?",
            possibilities: [
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Zaznacz Pandę Wielką",
            possibilities: [
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Zaznacz Pande rudą",
            possibilities: [
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Gdzie zyja pandy?'",
            possibilities: [
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Ile Pand żyje na świecie?",
            possibilities: [
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Jaka jest najwieksza panda?",
            possibilities: [
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Zaznacz pandę małą",
            possibilities: [
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                },
                {
                    answer: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Ile waży Panda?",
            possibilities: [
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Czym żywi się Panda wielka?",
            possibilities: [
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                },
                {
                    answer: "Lorem Ipsum"
                }
            ],
            selected: null,
            correct: null
        }
    ];
		
		var pandasData = [
        {
            type: "Panda Wielka",
            image_url: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738",
            locations: "Azja",
            size: "200kg",
            lifespan: "40lat",
            diet: "Bambusy i owady",
			description: "Panda wielka zamieszkuje lasy bambusowe na wysokości 1200–4100 m n.p.m.[2] (zimą schodzi do 800 m n.p.m.). Jej przynależność do drapieżnych nie ulega wątpliwości, jednak w rzeczywistości odżywia się pędami roślin (głównie bambusa), nie gardzi też rybami i małymi gryzoniami. Zaliczenie pandy do zwierząt drapieżnych spowodowane jest budową jej układu pokarmowego."
        },
        {
            type: "Panda Mała",
            image_url: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738",
            locations: "Azja",
            size: "200kg",
            lifespan: "40lat",
            diet: "Bambusy i owady",
            description: "Panda wielka zamieszkuje lasy bambusowe na wysokości 1200–4100 m n.p.m.[2] (zimą schodzi do 800 m n.p.m.). Jej przynależność do drapieżnych nie ulega wątpliwości, jednak w rzeczywistości odżywia się pędami roślin (głównie bambusa), nie gardzi też rybami i małymi gryzoniami. Zaliczenie pandy do zwierząt drapieżnych spowodowane jest budową jej układu pokarmowego."
        },
        {
            type: "Panda Ruda",
            image_url: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738",
            locations: "Azja",
            size: "200kg",
            lifespan: "40lat",
            diet: "Bambusy i owady",
            description: "Panda wielka zamieszkuje lasy bambusowe na wysokości 1200–4100 m n.p.m.[2] (zimą schodzi do 800 m n.p.m.). Jej przynależność do drapieżnych nie ulega wątpliwości, jednak w rzeczywistości odżywia się pędami roślin (głównie bambusa), nie gardzi też rybami i małymi gryzoniami. Zaliczenie pandy do zwierząt drapieżnych spowodowane jest budową jej układu pokarmowego."
        },
        {
            type: "Panda Europejska",
            image_url: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738",
            locations: "Azja",
            size: "200kg",
            lifespan: "40lat",
            diet: "Bambusy i owady",
            description: "Panda wielka zamieszkuje lasy bambusowe na wysokości 1200–4100 m n.p.m.[2] (zimą schodzi do 800 m n.p.m.). Jej przynależność do drapieżnych nie ulega wątpliwości, jednak w rzeczywistości odżywia się pędami roślin (głównie bambusa), nie gardzi też rybami i małymi gryzoniami. Zaliczenie pandy do zwierząt drapieżnych spowodowane jest budową jej układu pokarmowego."
        },
        {
            type: "Panda Wielka",
            image_url: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738",
            locations: "Azja",
            size: "200kg",
            lifespan: "40lat",
            diet: "Bambusy i owady",
            description: "Panda wielka zamieszkuje lasy bambusowe na wysokości 1200–4100 m n.p.m.[2] (zimą schodzi do 800 m n.p.m.). Jej przynależność do drapieżnych nie ulega wątpliwości, jednak w rzeczywistości odżywia się pędami roślin (głównie bambusa), nie gardzi też rybami i małymi gryzoniami. Zaliczenie pandy do zwierząt drapieżnych spowodowane jest budową jej układu pokarmowego."
        },
        {
            type: "Panda Wielka",
            image_url: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738",
            locations: "Azja",
            size: "200kg",
            lifespan: "40lat",
            diet: "Bambusy i owady",
            description: "Panda wielka zamieszkuje lasy bambusowe na wysokości 1200–4100 m n.p.m.[2] (zimą schodzi do 800 m n.p.m.). Jej przynależność do drapieżnych nie ulega wątpliwości, jednak w rzeczywistości odżywia się pędami roślin (głównie bambusa), nie gardzi też rybami i małymi gryzoniami. Zaliczenie pandy do zwierząt drapieżnych spowodowane jest budową jej układu pokarmowego."
        },
        {
            type: "Panda Wielka",
            image_url: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738",
            locations: "Azja",
            size: "200kg",
            lifespan: "40lat",
            diet: "Bambusy i owady",
            description: "Panda wielka zamieszkuje lasy bambusowe na wysokości 1200–4100 m n.p.m.[2] (zimą schodzi do 800 m n.p.m.). Jej przynależność do drapieżnych nie ulega wątpliwości, jednak w rzeczywistości odżywia się pędami roślin (głównie bambusa), nie gardzi też rybami i małymi gryzoniami. Zaliczenie pandy do zwierząt drapieżnych spowodowane jest budową jej układu pokarmowego."
        },
        {
            type: "Panda Wielka",
            image_url: "https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738",
            locations: "Azja",
            size: "200kg",
            lifespan: "40lat",
            diet: "Bambusy i owady",
            description: "Panda wielka zamieszkuje lasy bambusowe na wysokości 1200–4100 m n.p.m.[2] (zimą schodzi do 800 m n.p.m.). Jej przynależność do drapieżnych nie ulega wątpliwości, jednak w rzeczywistości odżywia się pędami roślin (głównie bambusa), nie gardzi też rybami i małymi gryzoniami. Zaliczenie pandy do zwierząt drapieżnych spowodowane jest budową jej układu pokarmowego."
        }
];
		
		
		
		
		
		
		
})();