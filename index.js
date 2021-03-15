// Training set
// var data = 
//     [
//         {person: 'Homer', hairLength: 0, weight: 250, age: 36, sex: 'male'},
//         {person: 'Marge', hairLength: 10, weight: 150, age: 34, sex: 'female'},
//         {person: 'Bart', hairLength: 2, weight: 90, age: 10, sex: 'male'},
//         {person: 'Lisa', hairLength: 6, weight: 78, age: 8, sex: 'female'},
//         {person: 'Maggie', hairLength: 4, weight: 20, age: 1, sex: 'female'},
//         {person: 'Abe', hairLength: 1, weight: 170, age: 70, sex: 'male'},
//         {person: 'Selma', hairLength: 8, weight: 160, age: 41, sex: 'female'},
//         {person: 'Otto', hairLength: 10, weight: 180, age: 38, sex: 'male'},
//         {person: 'Krusty', hairLength: 6, weight: 200, age: 45, sex: 'male'}
//     ];
var data =
        [
            {"Name": "Yu Xia", "Age": 29, "Appearance": "Handsome", "Body Type": "Slim", "Income": "High", Meet: "See" },
            {"Name": "Peas", "Age": 25, "Appearance": "Handsome", "Body Type": "Slim", "Income": "High", Meet: "See" },
            {"Name": "Handsome Changrong", "Age": 26, "Appearance": "Handsome", "Body Type": "Fat", "Income": "High", Meet: "See" },
            {"Name": "Wang Tao", "Age": 22, "Appearance": "Handsome", "Body Type": "Slim", "Income": "High", Meet: "See" },
            {"Name": "Li Dong", "Age": 23, "Appearance": "Handsome", "Body Type": "Slim", "Income": "High", Meet: "See" },
            {"Name": "Wang Wuwu", "Age": 23, "Appearance": "Handsome", "Body Type": "Slim", "Income": "Low", Meet: "See" },
            {"Name": "Wang Xiaotao", "Age": 22, "Appearance": "Handsome", "Body Type": "Slim", "Income": "Low", Meet: "See" },
            {"Name": "Li Bin", "Age": 21, "Appearance": "Handsome", "Body Type": "Fat", "Income": "High", Meet: "See" },
            {"Name": "Liu Ming", "Age": 21, "Appearance": "Handsome", "Body Type": "Fat", "Income": "Low", Meet: "Not See" },
            {"Name": "Red Crane", "Age": 21, "Appearance": "Not handsome", "Body Type": "Fat", "Income": "High", Meet: "Not See" },
            {"Name": "Li Li", "Age": 32, "Appearance": "Handsome", "Body Type": "Slim", "Income": "High", Meet: "Not See" },
            {"Name": "Zhouzhou", "Age": 31, "Appearance": "Handsome", "Body Type": "Slim", "Income": "High", Meet: "Not See" },
            {"Name": "Li Le", "Age": 27, "Appearance": "Not handsome", "Body": "Fat", "Income": "High", Meet: "Not See" },
            {"Name": "Han Ming", "Age": 24, "Appearance": "Not handsome", "Body": "Slim", "Income": "High", Meet: "Not See" },
            {"Name": "Little Lu", "Age": 28, "Appearance": "Handsome", "Body Type": "Slim", "Income": "Low", Meet: "Not See" },
            {"Name": "Li Si", "Age": 25, "Appearance": "Handsome", "Body Type": "Slim", "Income": "Low", Meet: "Not See" },
            {"Name": "Wang Peng", "Age": 30, "Appearance": "Handsome", "Body Type": "Slim", "Income": "Low", Meet: "Not See" },
        ];
// Configuration
var config = {
    trainingSet: data, 
    categoryAttr: 'Appearance', 
    ignoredAttributes: ['Name']
};

// Building Decision Tree
var decisionTree = new dt.DecisionTree(config);

// Building Random Forest
var numberOfTrees = 3;
var randomForest = new dt.RandomForest(config, numberOfTrees);

// Testing Decision Tree and Random Forest
var comic = {person: 'Comic guy', hairLength: 8, weight: 180, age: 38};

var decisionTreePrediction = decisionTree.predict(comic);
var randomForestPrediction = randomForest.predict(comic);
console.log(data.length)
console.log(randomForestPrediction)