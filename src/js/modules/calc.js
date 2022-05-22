import { getResource } from "../services/requests";

let calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);


    function changePram(even, elem){
        elem.addEventListener(even, (e) => {
            const target = e.target,
                  select = target.id;
            console.log(select);



            getResource('../../assets/calcPrice.json')
            .then(res => {
                /* cakcFun(res); */
            })
            .catch(err => console.error(err));
        });
    }

    changePram('change', sizeBlock);

/*     let sum = 0;


    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === '' || materialBlock.value === ''){
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        }else if (promocodeBlock.value === 'IWANTPOPART'){
            resultBlock.textContent = Math.round(sum * 0.7);
        }else{
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc); */

};

export default calc;