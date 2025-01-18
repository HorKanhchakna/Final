'use strict';

        try {
          
            console.log('Student Name: Hor Kanhchakna');
            let x = 20
        } catch (error) {
            console.error(error.message); 
        }

        function demo() { 
            try {
                let y = 21; 
            } catch (error) {
                console.error(error.message); 
            }
        }

        demo();

        try {
            eval("var z = 50; delete z;"); 
        } catch (error) {
            console.error(error.message); 
        }