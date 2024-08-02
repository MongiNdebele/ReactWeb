import React from "react";
import { InputGroup, FormControl } from "react-bootstrap"; 
import { FaSearch } from "react-icons/fa";
import styles from '../../sass/app-pages/searchinput.module.sass';

const SearchInput = () => {
    return (
        <InputGroup className={`mb-6 ${styles.search}`}>
            <InputGroup.Text
              id="basic-addon1"
              style={{ backgroundColor: "transparent", borderRight: "none" }}
            >
              <FaSearch className={styles.search} />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              style={{
                backgroundColor: "transparent",
                borderLeft: "none",
                color: "rgb(113,113,113)",
                fontFamily: "Lexend Medium",
              }}
            />
          </InputGroup>
    );
};

export default SearchInput;
