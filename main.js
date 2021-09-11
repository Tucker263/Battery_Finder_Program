//バッテリー、読み取り専用
const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

//カメラ、読み取り専用
const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;

//GUI用の関数コンテナ
class GuiFunctions{
    static setInitLayout(){
        //brandの配列、modelの配列を取得
        const brandArr = UnderFunctions.getBrandArr();
        const modelArr = UnderFunctions.getModelArr(brandArr[0]);

        //レイアウトの土台作成---土台にタイトルとフォームが載る
        let positionDiv = document.createElement("div");
        positionDiv.classList.add("p-4", "d-flex", "justify-content-center");
        document.getElementById("target").append(positionDiv);
        let baseDiv = document.createElement("div");
        baseDiv.classList.add("col-sm-10", "col-md-8", "col-lg-6");
        positionDiv.append(baseDiv);
        //タイトル作成
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("p-2", "bg-primary", "d-flex", "justify-content-center");
        titleDiv.innerHTML = 
        `
            <h4 class="text-white">Battery Finder Program</h4>
        `;
        baseDiv.append(titleDiv);

        //フォーム作成
        let bodyDiv = document.createElement("div");
        bodyDiv.classList.add("bg-light", "p-4");
        baseDiv.append(bodyDiv);
        let formBase = document.createElement("form");
        bodyDiv.append(formBase);
            //step1作成
        let formG1 = document.createElement("div");
        formG1.classList.add("form-group");
        let formG1Html = 
        `
            <h6>step1:Slect your brand</h6>
            <select class="form-control col-6 col-sm-4" id="step1">
        `;
        for(let i=0; i<brandArr.length; i++){
            formG1Html += `<option>${brandArr[i]}</option>`;
        }
        formG1Html+=`</select>`;
        formG1.innerHTML = formG1Html;
            //step2作成
        let formG2 = document.createElement("div");
        formG2.classList.add("form-group");
        let formG2Html = 
        `
            <h6>step2:Slect your Model</h6>
            <select class="form-control col-6 col-sm-5" id="step2">
        `;
        for(let i=0; i<modelArr.length; i++){
                formG2Html += 
                `
                    <option>
                    ${modelArr[i]}
                    </option>
                `;
        }
        formG2Html += `</select>`;
        formG2.innerHTML = formG2Html;
            //step3作成
        let formG3 = document.createElement("div");
        formG3.classList.add("form-group");
        formG3.innerHTML = 
        `
            <h6>step3:Input Accessory Power Consumption</h6>
            <div class="d-flex">
                <input type="number" class="form-control col-4 col-sm-3" id="step3">
                <p style="padding-top:0.375rem">W</p>
            </div>
        `;
            //step4作成
        let formG4 = document.createElement("div");
        formG4.classList.add("form-group");
        formG4.innerHTML = 
        `
            <h6>step4:Choose Your Battery</h6>
            <div id="step4">
                <p>No available</p>
            </div>
        `;
        formBase.append(formG1);
        formBase.append(formG2);
        formBase.append(formG3);
        formBase.append(formG4);
    }

    static setInitEventListener(){
        document.getElementById("step1").addEventListener("change",function(){
            GuiFunctions.updateStep2();
            GuiFunctions.updateStep4();
        });
        document.getElementById("step2").addEventListener("change",function(){
            GuiFunctions.updateStep4();
        });
        document.getElementById("step3").addEventListener("input",function(){
            GuiFunctions.updateStep4();
        });
    }

    static updateStep2(){
        const modelArr = UnderFunctions.getModelArr(document.getElementById("step1").value);
        document.getElementById("step2").innerHTML = "";
        for(let i=0; i<modelArr.length; i++){
                document.getElementById("step2").innerHTML += 
                `
                    <option>${modelArr[i]}</option>
                `;
        }
    }

    static updateStep4(){
        let step3Value = document.getElementById("step3").value;
        document.getElementById("step4").innerHTML = "";
        if(step3Value.length!=0 && Number(step3Value)>=0 && Number(step3Value)<=100){
            //互換性のあるバッテリーを取得し、画面に反映
            let batteryArr = UnderFunctions.getAvailableBatteryArr2d();
            for(let i=0; i<batteryArr.length; i++){
                document.getElementById("step4").innerHTML += 
                `
                    <div class="border bg-white d-flex justify-content-between pt-2">
                        <p>${batteryArr[i][0]}</p>
                        <p style="font-size:0.8rem;">Estimated ${batteryArr[i][1]} hours on selected setup</p>
                    </div>
                `;
            }
            GuiFunctions.setHoverEventListener();
        }else{
            document.getElementById("step4").innerHTML = 
            `
                <p>No available</p>
            `;
        }
    }

    static setHoverEventListener(){
        let borders = document.querySelectorAll(".border");
        for(let i=0; i<borders.length; i++){
            borders[i].addEventListener("mouseover", function(){
                borders[i].classList.replace("bg-white","bg-warning");
            });
            borders[i].addEventListener("mouseout", function(){
                borders[i].classList.replace("bg-warning","bg-white");
            });
        }
    }
}

//水面下で動作する関数コンテナ
class UnderFunctions{   
    static getBrandArr(){
        let brandArr = [];
        let hashMap = {};
        for(let i=0; i<camera.length; i++){
            if(hashMap[camera[i]["brand"]] === undefined){
                hashMap[camera[i]["brand"]] = 0;
                brandArr.push(camera[i]["brand"]);
            }
        }
        brandArr.sort();
        return brandArr;
    }

    static getModelArr(brandName){
        let modelArr = [];
        for(let i=0; i<camera.length; i++){
            if(camera[i]["brand"]==brandName){
                modelArr.push(camera[i]["model"]);
            }
        }
        modelArr.sort();
        return modelArr;
    }

    static getAvailableBatteryArr2d(){
        let batteryArr = [];//[バッテリー名, 駆動時間]
        let allWh = UnderFunctions.getCameraWh(document.getElementById("step2").value) + Number(document.getElementById("step3").value);//全ての消費電力
        for(let i=0; i<battery.length; i++){
            let safePower = battery[i]["maxDraw"] * battery[i]["endVoltage"];
            if(allWh < safePower){
                let batteryWh = battery[i]["capacityAh"] * battery[i]["voltage"];
                batteryArr.push([battery[i]["batteryName"], Math.round(batteryWh/allWh*10)/10]);
            }
        }
        batteryArr.sort();
        return batteryArr;
    }

    static getCameraWh(modelName){
        for(let i=0; i<camera.length; i++){
            if(camera[i]["model"]==modelName) return camera[i]["powerConsumptionWh"];
        }
        return null;
    }
}


GuiFunctions.setInitLayout();
GuiFunctions.setInitEventListener();