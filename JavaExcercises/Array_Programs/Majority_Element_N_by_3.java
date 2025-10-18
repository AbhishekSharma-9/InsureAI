package Array;

import java.util.*;

public class Majority_Element_N_by_3{
    public static void main(String[] args) {
        int[]arr = {4};
        System.out.println(majorityElement(arr));
    }
    public static List< Integer > majorityElement(int []v) {
        // Write your code here
        int limit = (int)Math.floor(v.length/3.0);
        ArrayList<Integer> list = new ArrayList<>();
        HashMap<Integer,Integer> hash = new HashMap<>();
        for (int j : v) {
            int value = hash.getOrDefault(j, 0);
            hash.put(j, value + 1);
        }
        for(Map.Entry<Integer,Integer> elem : hash.entrySet()){
            if(elem.getValue()>=limit){
                list.add(elem.getKey());
            }
        }
        return list;
    }
}
