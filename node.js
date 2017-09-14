var IS_RETINA = true;

function retinable() {
    return process.env.RETINABLE || IS_RETINA;
}

retinable.suffix = function() {
    if (retinable()) {
        return "@2x";
    }
    return "";
}

retinable.setRetina = function(retina) {
    IS_RETINA = retina;
}

module.exports = retinable

