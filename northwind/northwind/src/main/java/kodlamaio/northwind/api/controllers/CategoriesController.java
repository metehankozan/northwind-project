package kodlamaio.northwind.api.controllers;

import kodlamaio.northwind.business.abstracts.CategoryService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.entities.concretes.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/categories")
@CrossOrigin
public class CategoriesController {
    private final CategoryService categoryService;

    @GetMapping("/getall")
    public DataResult<List<Category>> getAll(){
        return categoryService.getAll();
    }
}
