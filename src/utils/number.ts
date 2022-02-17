
const toFixed = (n:number,zero= true,fixed = 2) => {
    let result: number | string = ~~(Math.pow(10,fixed) * (n * 100 /100)  ) / Math.pow(10, fixed);
    if(zero) {
        let decimals = result.toString().split(".");
        if(decimals.length === 1) {
            result = result.toString() + ".00";
            return  result;
        }
        if(decimals.length > 1) {
            if(decimals[1].length < 2) {
                result = result.toString() + "0"
            }
            return  result;
        }
    }
    return  result

} ;
export {toFixed};
