import { Router, Request, Response } from "express";


const router = Router()


router.post('/frete', async (req: Request, res: Response) => {
    console.log(`${process.env.TOKEN_FRETE}`)

    const {customerCep} = req.body


    const url = 'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzBiYThhODA1NzM0NWM4NzZlOGZkM2ZhN2IwMmFkOTEwYzNkODA3NzI4NTAzNjI4NzczNDgyMTllOWUyNzEyODE2ZmQyODc1MDRjNTY0YjEiLCJpYXQiOjE3NDY5MjQ5MjAuNDU4MTEyLCJuYmYiOjE3NDY5MjQ5MjAuNDU4MTEzLCJleHAiOjE3Nzg0NjA5MjAuNDQ4NDQ2LCJzdWIiOiI5ZWMyZjQ2Mi00NTg4LTQzNTAtYTU1Yi03NjM4MGI2NmY0MzciLCJzY29wZXMiOlsic2hpcHBpbmctY2FsY3VsYXRlIl19.zxBZSH84u6A6nQLcs5goJU2tGXgEm0Z9mPHDFclXKJcpoNKq7kKb-wpL1VeVyN8xl87TW791SR_Kn6OOQd58GftCS3rVcsjq7xg6qsDyteIgYMOf0sqVJa1LjxWPpe2IITJvcU7PcFL1fMFL334XjSt9zFbYQHj18XvCIuBim5HH3SsFPHxFzE0AUHCkW9po7LPT8K81sTRyM24yeS2V3m1PE2ErZ33AWsPn7e3SKF84X5Ta0qPB8445iYR6cduVYnfmuRZwmObCMGCvb-UYNsevTwdXymgYwsc5hKWLS34QlpAUgLK_CPBpE9wfJHmGNBniIPGusYEe0I49rAVCts-Kj0Kmd9Mfg2r4W18Xx9DS6fj-WiLl0k6F2nvJkXSswzQstIPy8Vm7w_nEUs8ZmH3zKgKi2vgXW6qpDmhHxOtr0--M__HAGzP51Gv7pHYRt5p10LjCI-WMcTSu32_IdjUQD0ZKl3eMg5eRqpsX4abk8HWoDdpjONxH34LPBIvWpGOPEJNoM1Jxcdjv0B2pXpEP2xxwSh6boPmqOQDnkWAgL-rA0KOIAPHNcIxWT8ln7Q4xbtK9eubL1tj32m9gLDRcJ-1qSpHbTFwMzh23JLNcRKWN1Otk4Tilu1DeqZeXwSIsV7IM1MvxMQCMgUmPg_0VMQcyigKCxWNbnRTCzmM`,
            'User-Agent': 'Aplicação azulvictorhugo@gmail.com'
        },
        body: JSON.stringify({
            from: { postal_code: `09841550` },
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
                }
                
            ]
        })
    };

    res.json(await fetch(url, options)
    .then(res => res.json())
    .then(json => json)
    .catch(err => err))

   


    


})



export { router }