```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over a changing variable
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```