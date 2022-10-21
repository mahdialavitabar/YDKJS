// if else if
if (a == 2) {
    // do somthing
} else if (a == 10) {
    // do another thing
} else if (a == 42) {
    // do yet another thing 
} else {
    //fallback to here
}

switch (a) {
    case 2:
        //do soemthing
        break;
        case 10:
            //do another thing
            case 42:
                //do yet another thing
                break;
                default:
                    //fallback to here
}

// fall through
switch (a) {
    case 2:
        case 19:
            // Some cool stuff
            break;
            case 42:
                //another stuff
                break;
                default:
                    //fallback
}