
package leetcode.tree.BinaryTree.preOrderTraversal;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import javax.swing.plaf.ListUI;

//   Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class SolutionLEET {
    public void preOrder(TreeNode root, List<Integer> ans) {
        if (root == null)
            return;
        ans.add(root.val);
        preOrder(root.left, ans);
        preOrder(root.right, ans);
        return;
    }

    public List<Integer> preorderTraversal(TreeNode root) {
        if (root == null)
            return new ArrayList<>(Arrays.asList());
        List<Integer> ans = new ArrayList<>();
        ans.add(root.val);
        preOrder(root.left, ans);
        preOrder(root.right, ans);
        return ans;
    }
}

class Solution {
    private List<Integer> traverseTreeInPreOrder(TreeNode node, List<Integer> visitedList) {
        List<Integer> resultList = new ArrayList<>();
        List<Integer> leftVisited = new ArrayList<>();
        List<Integer> rigthVisited = new ArrayList<>();
        if (node != null) {
            visitedList.add(node.val);
            if (node.left != null) {
                leftVisited = traverseTreeInPreOrder(node.left, visitedList);
            }
            if (node.right != null) {
                rigthVisited = traverseTreeInPreOrder(node.right, visitedList);
            }
        }
        resultList.addAll(visitedList);
        if (leftVisited.size() > 0) {
            resultList.addAll(leftVisited);
        }
        if (rigthVisited.size() > 0) {
            resultList.addAll(rigthVisited);
        }

        return resultList;
    }

    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> visited = new ArrayList<>();
        traverseTreeInPreOrder(root, visited);
        return visited;
    }
}

public class preOrderTraversal {
    public static void main(String[] args) {
        Solution sol = new Solution();

        // Creating example tree
        TreeNode first = new TreeNode(1);
        first.right = new TreeNode(2);
        first.right.left = new TreeNode(3);

        System.out.println(sol.preorderTraversal(first));
    }
}

class Example {
    public static void main(String[] args) {
        List<String> originalList = new ArrayList<>();
        originalList.add("Hello");

        modifyList(originalList);

        // originalList is modified because modifyList has a reference to the same
        // object
        System.out.println(originalList); // Output: [Hello, World]
    }

    public static void modifyList(List<String> list) {
        list.add("World");
    }
}

// Java always passes arguments to methods by value. For primitive types (like
// int, char, etc.), the value of the variable is passed. For objects, the value
// of the reference to the object is passed.

// In this example:

// originalList is created and contains one element, "Hello".
// modifyList is called with originalList as the argument.
// Inside modifyList, the reference to the originalList is copied, so list
// refers to the same object as originalList.
// When list.add("World") is called inside modifyList, it modifies the same List
// object that originalList refers to.

// Summary
// When you pass a List to a method, you are passing a copy of the reference to
// that List.
// Both the original reference and the copied reference point to the same List
// object.
// Modifying the List within the method will affect the original List because
// both references point to the same object.