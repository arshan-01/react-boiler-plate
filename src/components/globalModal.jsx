import { useSelector, useDispatch } from 'react-redux';
import { X } from "lucide-react";
import { closeModal } from '../redux/features/modal/modal.slice';

const GlobalModal = () => {

  const dispatch = useDispatch();

  const modal = useSelector(state => state.modal);
  const { isOpen, componentName, componentProps } = modal;

  if (!isOpen || !componentName) return null;

  const ComponentToRender = componentName;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
        <div className="2xsm:w-11/12 md:w-3/4 lg:w-2/5 xl:w-1/2 relative bg-white px-6 py-6 rounded-lg shadow-lg">
          
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 z-50 text-gray-500 p-1 pb-2 pr-4 pt-6 rounded hover:border-none hover:outline-none"
            onClick={() => dispatch(closeModal())}
          >
            <X size={22} color='gray'/>
          </button>
          
          {/* Render the dynamic component */}
          <div className="relative mt-3">
            <ComponentToRender {...componentProps} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalModal;