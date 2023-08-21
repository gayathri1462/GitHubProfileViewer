import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

interface PaginationProps {
  onPageChange: any;
  pageCount: number;
  forcePage: number;
}

export const Pagination = ({
  onPageChange,
  pageCount,
  forcePage
}: PaginationProps) => {
  return (
    <ReactPaginate
      nextLabel={">"}
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      forcePage={forcePage}
      previousLabel="<"
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousClassName={styles.prev}
      previousLinkClassName={styles.pageLink}
      nextClassName={styles.next}
      nextLinkClassName={styles.pageLink}
      breakLabel="..."
      breakClassName={styles.pageItem}
      breakLinkClassName={styles.pageLink}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      renderOnZeroPageCount={null}
    />
  );
};
