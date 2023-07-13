// get number
// jadikan array
// urutkan bilangan dari terkecil ke terbesar
// cek bilangan prima, bilangan prima faktor pembaginya hanya 1 dan bilangan itu sendiri
// bilangan prima nilai pembaginya pasti lebih kecil nilainya dari bilangan itu sendiri

// exports.ganjil = function(req,res) {
    // const bilangan = req.bilangan
    const bilangan = 1345000
    if(Number.isInteger(bilangan)){
        const bilStr = bilangan.toString()
        const bilLen = bilStr.length
        const bilArr = bilStr.split("")
        bilArr.sort()
        bilRes = ""
        for (let bil = 0; bil < bilLen; bil++){
            const bilNumber     = Number(bilArr[bil])
            factorArr = []
            for(let factor = 0;factor<=bilNumber;factor++){
                if(bilNumber % factor == 0){
                    factorArr.push(factor)
                }
            }
            if(factorArr.length==2 || bilNumber == 1){
                bilRes += bilNumber.toString()
            }
        }
        res = bilRes
        console.log(res)
    }    
// }
