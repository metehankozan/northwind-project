package kodlamaio.northwind.business.concretes;

import kodlamaio.northwind.business.abstracts.CategoryService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.SuccessDataResult;
import kodlamaio.northwind.dataAccess.abstracts.CategoryDao;
import kodlamaio.northwind.entities.concretes.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CategoryManager implements CategoryService {

    private final CategoryDao categoryDao;

    @Override
    public DataResult<List<Category>> getAll() {
        return new SuccessDataResult<>(categoryDao.findAll(), "Listeleme başarılı");
    }
}
