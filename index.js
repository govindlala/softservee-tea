class SoftServeTea {
    constructor(teaName, teaType, cryptoBalance) {
      this.teaName = teaName;
      this.teaType = teaType || 'Green Tea';
      this.cryptoBalance = cryptoBalance || 0;
      this.cryptoPortfolio = [];
    }
  
    purchaseTeaWithCrypto(amount) {
      if (this.cryptoBalance >= amount) {
        this.cryptoBalance -= amount;
        console.log(`${this.teaName} purchased with ${amount} crypto coins. Remaining balance: ${this.cryptoBalance} coins.`);
      } else {
        console.log(`Insufficient crypto balance to purchase ${this.teaName}.`);
      }
    }
  
    investInCrypto(coinName, amount) {
      const cryptoInvestment = {
        coin: coinName,
        amount: amount,
      };
      this.cryptoPortfolio.push(cryptoInvestment);
      console.log(`${this.teaName} owner invested ${amount} in ${coinName}.`);
    }
  
    displayTeaAndCryptoStats() {
      console.log(`
        SoftServeTea Information:
        Tea Name: ${this.teaName}
        Tea Type: ${this.teaType}
        Crypto Balance: ${this.cryptoBalance} coins
        Crypto Portfolio: ${this.cryptoPortfolio.map(investment => `${investment.amount} ${investment.coin}`).join(', ')}
      `);
    }
  }
  
  // Example usage
  const softServeTeaShop = new SoftServeTea('Cryptea Delight', 'Black Tea', 100);
  
  softServeTeaShop.purchaseTeaWithCrypto(20);
  softServeTeaShop.investInCrypto('Bitcoin', 30);
  softServeTeaShop.displayTeaAndCryptoStats();
  