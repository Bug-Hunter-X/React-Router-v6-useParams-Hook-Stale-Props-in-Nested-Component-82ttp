// ParentComponent.js
import { useParams } from 'react-router-dom';

function ParentComponent() {
  const { id } = useParams();
  console.log('ParentComponent id:', id);
  return (
    <div>
      <ChildComponent id={id} />
    </div>
  );
}

export default ParentComponent;

// ChildComponent.js
function ChildComponent({ id }) {
  console.log('ChildComponent id:', id);
  return <div>Child Component: {id}</div>;
}

export default ChildComponent;