function checkStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Student Found");

        }, 2000);

    });

}


function checkMarks() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(85);

        }, 1500);

    });

}


function checkGrade(marks) {

    return new Promise((resolve) => {

        setTimeout(() => {

            if(marks >= 35) {
                resolve("Pass");
            }
            else {
                resolve("Fail");
            }

        }, 1000);

    });

}


async function studentResult() {

    try {

        console.log("Checking Student...");

        let student = await checkStudent();

        console.log(student);


        console.log("Checking Marks...");

        let marks = await checkMarks();

        console.log("Marks :", marks);


        console.log("Checking Grade...");

        let grade = await checkGrade(marks);

        console.log("Result :", grade);

    }

    catch(error) {

        console.log(error);

    }

}

studentResult();