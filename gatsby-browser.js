/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require('react')

export const wrapPageElement = ({ element }) => {
  return <div>{element}</div>
}
