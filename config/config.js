module.exports = {
        development: {
                // username: "postgres",
                // password: "new_password",
                // database: "WearItAgain",
                // host: "127.0.0.1",
                database: "wear_it_again",
                connectionString: "DATABASE_URL",
                dialect: "postgres",
        },
        test: {
                database: "wear_it_again",
                connectionString: "DATABASE_URL",
                dialect: "postgres",
        },
        production: {
                database: "wear_it_again",
                connectionString: "DATABASE_URL",
                dialect: "postgres",
        }
};



// postgres://wear_it_again_user:erVXXZmhFPeZTRAEKplLWGXolvetOvIf@dpg-cnakj60l6cac739ov3pg-a/wear_it_again