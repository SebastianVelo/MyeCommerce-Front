import Path from "./Path";

class PathLink {
    static COMMERCE = (t)     =>                     Path.COMMERCE + t.props.match.params.path;
    static LOGIN =    (t)     => this.COMMERCE(t)  + Path.LOGIN;
    static SINGIN =   (t)     => this.COMMERCE(t)  + Path.SINGIN; 
    static ACCOUNT =  (t)     => this.COMMERCE(t)  + Path.ACCOUNT; 
    static CART =     (t)     => this.COMMERCE(t)  + Path.CART; 
    static CATEGORY = (t, id) => this.COMMERCE(t)  + Path.CATEGORY + id;
    static PRODUCT =  (t, id) => this.COMMERCE(t)  + Path.PRODUCT  + id;
} 

export default PathLink;