import '../operator/add'
import '../operator/minus'
export function tree_i(){
   void `x1 :add + minus`
   void `y1 :add - minus`

   void `z1 :add :: minus`
   void `z2 :minus :: add`
   
   void `y2 :add ++ add`
   void `x2 :minus -- minus`
   return tree_i
}