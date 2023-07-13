// get number
// jadikan array
// urutkan bilangan dari terkecil ke terbesar
// remove angka yang sama
// cari ganjil dengan % 2

// exports.ganjil = function(req,res) {
    // const bilangan = req.bilangan
    const bilangan = 1345000
    if(Number.isInteger(bilangan)){
        let lastNumber = ""
        const bilStr = bilangan.toString()
        const bilLen = bilStr.length
        const bilArr = bilStr.split("")
        bilArr.sort()
        bilRes = ""
        for (let bil = 0; bil < bilLen; bil++){
            const bilNumber     = Number(bilArr[bil])
            if(lastNumber != bilNumber){
                if(bilNumber % 2 != 0){
                    bilRes += bilNumber.toString()
                }
            }
            lastNumber = bilNumber
        }
        res = bilRes
        console.log(res)
    }    
// }
