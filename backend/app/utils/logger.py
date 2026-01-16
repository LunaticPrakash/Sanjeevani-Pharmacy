import logging
import sys

logger = logging.getLogger("Sanjeevani") 

# Prevent Duplicate Logs
# If we import this file twice, we don't want double lines in the console
if not logger.hasHandlers():
    logger.setLevel(logging.DEBUG)
    
    # Formatter
    formatter = logging.Formatter(
        fmt="{asctime} - {name} - {levelname} - {message}",
        datefmt="%d-%b-%Y %H:%M:%S", 
        style='{'
    )

    # Handler 1: Console (Terminal)
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)

    # Handler 2: File (sanjeevani.log)
    file_handler = logging.FileHandler(
        filename='sanjeevani.log', 
        mode='a', 
        encoding='utf-8'
    )
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)