import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: 2,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 270,
    maxWidth: 358,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, categoryName, theme) {
  return {
    fontWeight:
      categoryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultiSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [categoryName, setCategoryName] = useState([]);
  const { categories } = props;

  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        id="demo-mutiple-chip"
        multiple
        value={categoryName}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {categories.map((category) => (
          <MenuItem
            key={category}
            value={category}
            style={getStyles(category, categoryName, theme)}
          >
            <Checkbox checked={categoryName.indexOf(category) > -1} />
            <ListItemText primary={category} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultiSelect;
