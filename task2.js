const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

  const getWorthyWorkers = massive => {
    let answer = [];

    for(let i=0; i<massive.length; i++ ){
      
      if (massive[i].salary>1000) {
        answer.push(massive[i].name);
      }
    }

    return answer;
  }

  console.log(getWorthyWorkers(workers));