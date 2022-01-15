import React from "react";
import TextField from '@material-ui/core/TextField';

export function SearchBar({redirect}) {
  return (
    <div>
      <form style={{ flexGrow: 1 }}
        onSubmit={e => {
            e.preventDefault();
        }}>
        <TextField id="outlined-basic" variant="outlined" type="search"
            fullWidth
            autoComplete='off'
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    redirect(e.target.value);
                }
            }}
            placeholder={"Type here..."}
            data-cy="searchBox"
        />
        
    </form>
    </div>
  );
}