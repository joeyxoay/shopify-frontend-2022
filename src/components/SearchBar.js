import React from "react";
import TextField from '@material-ui/core/TextField';

export function SearchBar({redirect}) {
  return (
      <form
        onSubmit={e => {
            e.preventDefault();
        }}
      >
        <TextField 
            id="standard-basic" 
            variant="standard" 
            type="search"
            fullWidth
            autoComplete='off'
            style={{background: "white", borderRadius: 50, paddingLeft:10, paddingRight:10}}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    redirect(e.target.value);
                }
            }}
            placeholder={"Type here..."}
        />
      </form>
  );
}