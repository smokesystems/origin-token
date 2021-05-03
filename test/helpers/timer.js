// timer for tests specific to testrpc
module.exports = sec => {
  return new Promise((resolve, reject) => {
    web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_increaseTime',
      params: [sec],
      id: new Date().getTime() // Id of the request
    }, function(err) {
      if (err) return reject(err);
      resolve();
    });
  });
};
