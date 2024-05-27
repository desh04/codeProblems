package leetcode.tree.BinaryTree.validateBinaryTree;

import java.util.LinkedList;
import java.util.Queue;

// Definition for a binary tree node.
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
    private boolean isValidBSTNode(TreeNode node) {
        boolean isValid = true;
        // System.out.println("Checking Node: " + node.val);

        if (node.left != null) {
            isValid = node.left.val < node.val;
        }
        if (node.right != null) {
            isValid = node.right.val > node.val && isValid;
        }
        return isValid;
    }

    @SuppressWarnings("null")
    public boolean isValidBST(TreeNode root) {

        Queue<TreeNode> bfsQueue = new LinkedList<>();

        bfsQueue.add(root);

        TreeNode currNode;

        while (!bfsQueue.isEmpty()) {
            currNode = bfsQueue.poll();
            if (currNode != null) {
                return isValidBSTNode(currNode);
            }

            // Adding children in the current queue
            if (currNode.left != null) {
                bfsQueue.add(currNode.left);
            }
            if (currNode.right != null) {
                bfsQueue.add(currNode.right);
            }
        }
        return true;
    }
}

public class validateBinaryTree {
    public static void main(String[] a) {
        Solution sol = new Solution();

        // Creating example tree
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);

        TreeNode root2 = new TreeNode(5);
        root2.left = new TreeNode(1);
        root2.right = new TreeNode(4);
        root2.right.left = new TreeNode(3);
        root2.right.right = new TreeNode(6);

        // System.out.println(sol.isValidBST(root));
        System.out.println(sol.isValidBST(root2));
    }
}
