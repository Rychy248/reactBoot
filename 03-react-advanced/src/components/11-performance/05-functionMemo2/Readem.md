### From [How to use react memo function?](https://hygraph.com/blog/react-memo)

# When to use React Memo

You now know what it means to memoize a component and the advantages of optimization. But this doesn’t mean you should memoize all your components to ensure maximum performance optimization of performance 🙃.

It is important to know when and where to memoize your component else it would not fulfill its purpose. For example, React Memo is used to avoid unnecessary re-renders when there is no change to the state or context of your component. If the state and content of your component will ALWAYS change, React Memo becomes useless. Here are other points:

- Use React Memo if your component will render quite often.

- Use it when your component often renders with the same props. This happens to child components who are forced to re-render with the same props whenever the parent component renders.

- Use it in pure functional components alone. If you are using a class component, use the React.PureComponent.

- Use it if your component is big enough (contains a decent amount of UI elements) to have props equality check.


# useCallback

The useCallback hook is a hook in React that allows you to memoize a function. It takes two arguments: the first is the function you want to memoize, and the second is an array of dependencies. The hook will return a memoized version of the function that only changes if one of the values in the dependency array changes.

By memoizing the function, you can avoid unnecessary re-renders and improve the performance of your React application. The function will only be re-created if one of its dependencies changes, otherwise the same instance of the function will be returned. This can be useful in situations where you have an expensive function that you only want to recompute when its dependencies change.
