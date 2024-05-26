
package leetcode.tree.BinaryTree.preOrderTraversal;

import java.util.ArrayList;
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