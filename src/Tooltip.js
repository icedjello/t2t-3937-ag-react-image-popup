import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import pizzaImg from "./images/pizza.jpg"


export  const TooltipRenderer = () => {
    return (
        <div>
            <Grid container justify="center">
                <Grid item>
                    <Tooltip
                        disableFocusListener
                        disableTouchListener
                        title={
                            <React.Fragment>
                                <img src={pizzaImg} />
                            </React.Fragment>
                        }
                    >
                        <Button>
                            <img src={pizzaImg} />
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </div>
    );
}
