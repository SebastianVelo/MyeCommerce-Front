import Path from "./Path";
import PathVariables from "./PathVariables";

class PathRoute {
    static COMMERCE =  () =>                   Path.COMMERCE + PathVariables.PATH;
    static LOGIN    =  () => this.COMMERCE() + Path.LOGIN;
    static SINGIN   =  () => this.COMMERCE() + Path.SINGIN;
    static ACCOUNT  =  () => this.COMMERCE() + Path.ACCOUNT;
    static CART     =  () => this.COMMERCE() + Path.CART;
    static CATEGORY =  () => this.COMMERCE() + Path.CATEGORY + PathVariables.ID;
    static PRODUCT  =  () => this.COMMERCE() + Path.PRODUCT  + PathVariables.ID;
}


export default PathRoute;