const mixedArray = [3,13,74,14,66,15,22,4];

      const filterArray = num => { 
        let answer = [];

        for (let i=0; i<num.length; i++){
          if (num[i]%2 == 0) {
            answer.push(num[i]);
          }
        }

        return answer;
      }

      console.log(filterArray(mixedArray));