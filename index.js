// Your code here
function saturdayFun(activity=`roller-skate`) {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity=`go to the office`) {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
        return function(part1="a dedicated programmer") {
            return `You are ${flair}${part1}${flair}!`
        }
    }

// function demoChain(name) {
//     const part1 = 'hi'
//     return function() {
//       const part2 = 'there'
//       return function() { 
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//       }
//     }
//   }
//   demoChain("Dr. Stephen Strange")()() //=> HI there Dr. Stephen Strange 