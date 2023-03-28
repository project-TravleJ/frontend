import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside>
      <div>
        <h4>remove all items from your shopping cart?</h4>
        <div>
          <button
            type='button'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type='button'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
