module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: "ec2-54-245-183-86.us-west-2.compute.amazonaws.com",
      username: 'ubuntu',
      pem: '../keys/Monster-Mayhem--meteor.pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  meteor: {
    // TODO: change app name and path
    name: 'monster-mayhem',
    // path: './',
      path: '/Users/olga/Desktop/Projects/monster-app',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: "http://ec2-54-245-183-86.us-west-2.compute.amazonaws.com",
      MONGO_URL: 'mongodb://localhost/meteor',
    },

    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base',
      // imagePort: 80, // (default: 80, some images EXPOSE different ports)
    },

    // This is the maximum time in seconds it will wait
    // for your app to start
    // Add 30 seconds if the server has 512mb of ram
    // And 30 more if you have binary npm dependencies.
    deployCheckWaitTime: 60,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
