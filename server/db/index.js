var dbConfig = require("./dbConfig.js")

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'mysqlcluster7.registeredsite.com',
    // user     : process.env.username,
    // password : process.env.password,
    // database : process.env.name,
    user     : dbConfig.username,
    password : dbConfig.password,
    database : dbConfig.name,
    charset  : 'utf8'
  }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('Projects').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('Projects', function(project){
      project.increments('id').primary();
      project.string('name');
      project.string('timeConstraint');
      project.string('wanted');
      project.string('description');
      project.timestamps();
    }).then(function(table){
      console.log('Created Projects Table', table);
    });  
  }
});

db.knex.schema.hasTable('Pledges').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('Pledges', function(pledge){
      pledge.increments('id').primary();
      pledge.integer('user_id').references(user.id);
      pledge.integer('project_id').references(project.id);
      pledge.integer('amount');
      pledge.timestamps();
    }).then(function(table){
      console.log('Created Pledges Table', table);
    });  
  }
});

db.knex.schema.hasTable('Users').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('Users', function(user){
      user.increments('id').primary();
      user.string('email');
      user.string('username');
    }).then(function(table){
      console.log('Created Users Table', table);
    });  
  }
});

db.knex.schema.hasTable('Keywords').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('Keywords', function(keyword){
      keyword.increments('id').primary();
      keyword.string('word');
      keyword.timestamps();
    }).then(function(table){
      console.log('Created Keywords Table', table);
    });  
  }
});

db.knex.schema.hasTable('Project-Keywords').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('Project-Keywords', function(pkey){
      pkey.increments('id').primary();
      pkey.integer('keyword_id').references(keyword.id);
      pkey.integer('project_id').references(project.id);
    }).then(function(table){
      console.log('Created Project-Keyword Table', table);
    });  
  }
});

module.exports = db;