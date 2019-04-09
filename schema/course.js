exports.typeDef = `
    type Query {
        getCourse(id: Int!): Course
        getCourses(topic: String): [Course]
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`;

var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
];


exports.resolvers = {
    Query: {
        getCourse: (obj, args, context, info) => { 
            var id = args.id;
            return coursesData.filter(course => {
                return course.id == id;
            })[0];
        },
        getCourses: (obj, args, context, info) => {
            if (args.topic) {
                var topic = args.topic;
                return coursesData.filter(course => course.topic === topic);
            } else {
                return coursesData;
            }
        }
    }
}
