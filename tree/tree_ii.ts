import '../operator/multiply'
import '../operator/div'
export function tree_ii(){
    void `x3 :multiply * div`
    void `y3 :multiply / div`

    void `z3 :multiply :: div`
    void `z4 :div :: multiply`
    
    void `y4 :multiply ** multiply`
    void `x4 :div // div`
    return tree_ii
}