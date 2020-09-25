
//https://leetcode.com/problems/validate-binary-search-tree/

// recursion

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    return dfs(root, null, null);
};

// in a BST all left nodes should be less than root and right nodes are greter than root

function dfs(node, min, max) {
    if(node === null) return true;
    
    // node val should be greter than min value
    if(min !== null && min >= node.val) {
        return false
    }
    
    // node val should be less than max value
    if(max !==null && node.val >= max) {
        return false
    }
    
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    
}


// Iteration

// A valid BST inorder travel gives array in sorted order(ascending)
// so we use that concept to check the validity

var isValidBST = function(root) {
    let stack= [];
    let curr = root;
    let result = null;
    
    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        
        if(result === null) {
            result = curr.val
        } else if(result >= curr.val) {
            return false
        } else {
            result = curr.val
        }
        
        curr = curr.right;
        
    }
    return true;
};