
exports.segitiga = function(req,res) {
    const bilangan = req.bilangan
    if(Number.isInteger(bilangan)){
        const bilStr = bilangan.toString()
        const bilLen = bilStr.length
        const bilArr = bilStr.split("")
        for (let bil = 0; bil < bilLen; bil++){
            const bilNumber     = bilArr[bil]
            const zeroNumber    = 10**(bil+1)
            const zeroString    = zeroNumber.toString()
            const zerolast      = zeroString.substring(1,bil+2)
            res = bilNumber.concat(zerolast)
        }
    }    
}
