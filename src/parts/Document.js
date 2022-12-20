import useModalDom from "helpers/hooks/useModalDom";
import useScrollAncor from "helpers/hooks/useScrollAncor";
import useScrollToTop from "helpers/hooks/useScrollToTop";

export default function Document({ children }) {
  useModalDom();
  useScrollAncor();
  useScrollToTop();
  return children;
}
