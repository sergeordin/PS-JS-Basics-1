/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не зватает баланса.
Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
    balance: 0,
    operations: [],
    increase: function (sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason,
            sum,
        });
        return true;
    },
    decrease: function (sum, reason) {
        if (this.balance < sum) {
            console.log('Malo deneg');
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason,
            sum: -sum,
        });
        return true;
    },
    getOperationsLenght: function () {
        return this.operations.length;
    },
};

console.log(wallet.increase(1000, 'zarplata'));
console.log(wallet.getOperationsLenght());
console.log(wallet.decrease(2000, 'komunalo4ka'));
