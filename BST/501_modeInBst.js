
// https://leetcode.com/problems/find-mode-in-binary-search-tree/


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
 * @return {number[]}
 */
var findMode = function(root) {
    let result = [];
  let maxCount = Number.MIN_SAFE_INTEGER;
  let prevNodeVal = null;
  let currNodeCnt =  0;
  
  function inOrder(node) {
      if(!node) return;
      
      inOrder(node.left);
      currNodeCnt = (node.val === prevNodeVal ? currNodeCnt : 0) + 1;
      prevNodeVal = node.val;
      if(maxCount < currNodeCnt) {
          result = [node.val];
          maxCount = currNodeCnt;
      } else if(maxCount === currNodeCnt) {
          result.push(node.val)
      }
      
      inOrder(node.right)
      
  }
  
  inOrder(root)
  return result;
};