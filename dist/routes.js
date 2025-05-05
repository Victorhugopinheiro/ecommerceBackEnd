"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/teste', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${process.env.TOKEN_FRETE}`);
    const { customerCep } = req.body;
    const url = 'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTYiLCJqdGkiOiJmM2UyOWExOGYyYWY0NGE3YTgyMGU5ZTYwZjk0YzQzOTZlNTZlZWY4ZDBkODJjMGJmYzcxZjc2OTM2NmEzZjI2ODJkZWIyZjZiNTQzMzk5OCIsImlhdCI6MTc0NTg4MjA4Ny43NzE5NywibmJmIjoxNzQ1ODgyMDg3Ljc3MTk3MywiZXhwIjoxNzc3NDE4MDg3Ljc2NTY1LCJzdWIiOiI5ZWM4ZjkwZi1lYzUzLTRiMTAtYTU0Yy02YTM3NmU3YWMzZjgiLCJzY29wZXMiOlsic2hpcHBpbmctY2FsY3VsYXRlIl19.cPdM6HEwwe4TlBm_Oa9Bl5OazbflUMtqCz1fZiK2nFCjiR_PScmAkqsY3uB47xyeXAOUPyeFpJL-SLykEU7eeCZZlrxPgiF_JsGaeRdEcPU6EXwmqTqmM4Bf9YLvCk46ggkavPS3Snarg0vh-cuHz4psONGp3-5Tq52e0iFL-U_rS0vyyiHCcYra5PnALigmPiIj7c30JG1obXy5kW38XBQfzH4BqyMDNfO8N7omJG-ryTdYt5_l071zmlIrqK2PDuGQ6QxVF1y6fp6tlbAm44UYDZxm4MgRxrlDcOM12DH_N8qxmVQRj4ZIhrU_a5LvoLZi2ufO6Rzm_axkc6LsDAhTt0Pv_2Vix8kT5ob3X-iDY2I5JvXfRrLreh7YQmSH84XWBngfJWFRHr2NgbzB3N_ZBFsgxfVkEuX2x7XBDtZ8Xb8XGehEC108lb9y1drN0Q2225cq5yAr7hAEu3HbcgNMgXDsh52M8mFAI1jrK8eqSc15b456S_AvDDLV5Mnj7jzflYO4n9eez7N9pjTC_xZKpJ1n4YJDVoZMPBwqSDRez9929uFe7RXbdV1aNN4RoTRglrWJN1OvBtllrC7puhiYwaLcnKfQ_L-z069bG94MHnUk8FSewoKFomN1Vk_1CF8OwTpxrazXuCltLbd93tkWUKBtkSf0cjS_syYIRPE`,
            'User-Agent': 'Aplicação azulvictorhugo@gmail.com'
        },
        body: JSON.stringify({
            from: { postal_code: '09840560' },
            to: { postal_code: `${String(customerCep)}` },
            products: [
                {
                    id: 'x',
                    width: 11,
                    height: 17,
                    length: 11,
                    weight: 0.3,
                    insurance_value: 10.1,
                    quantity: 1
                },
                {
                    id: 'y',
                    width: 16,
                    height: 25,
                    length: 11,
                    weight: 0.3,
                    insurance_value: 55.05,
                    quantity: 2
                },
                {
                    id: 'z',
                    width: 22,
                    height: 30,
                    length: 11,
                    weight: 1,
                    insurance_value: 30,
                    quantity: 1
                }
            ]
        })
    };
    res.json(yield fetch(url, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err));
}));
